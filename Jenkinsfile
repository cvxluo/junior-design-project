pipeline {
    agent any
    environment {
        credentials = 'ecr:us-east-1:AWSCredentials'
        REGISTRY = credentials('MeritRegistry')
        WEBHOOK = credentials('MeritWebhook')
    }

    stages {
        stage('Fetch Code') {
            steps {
                git branch: 'main', url: 'https://github.com/DanDigits/Project_Merit.git'
            }
        }
        stage('Jest Tests') {
            steps {
                script {
                    echo "Coming soon!"
                }
            }
        }
        stage('Build Image') {
            steps {
                script {
                    image = docker.build("merit:" + "$BUILD_NUMBER", ".")
                }
            }
        }
        stage('Upload Image') {
            steps {
                script {
                    docker.withRegistry("$REGISTRY", credentials) {
                        image.push("$BUILD_NUMBER")
                        image.push('latest')
                    }
                }
            }
        }
        stage('Deploy to ECS') {
            steps {
                withAWS(credentials: 'AWSCredentials', region: 'us-east-1') {
                    sh 'aws ecs update-service --cluster Merit --service meritService --force-new-deployment'
                }
            }
        }
    }
    post {
        always {
            echo "Send pipeline notification"
            discordSend description: "New main build #$BUILD_NUMBER is finished. Result is $currentBuild.currentResult" + ".", title: "Merit Pipeline", result: currentBuild.currentResult, webhookURL: "$WEBHOOK"
        }
    }
}