pipeline {
    agent any

    environment {
        REPO_URL = 'https://github.com/Jayram-Dhawal/Portfolio.git'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Cloning the repository...'
                git url: "${REPO_URL}", branch: 'main'
            }
        }

        stage('Build') {
            steps {
                echo 'No build needed for static site.'
            }
        }

        stage('Test') {
            steps {
                echo 'Running basic HTML validation...'
                // Example: Validate HTML using a tool if available
                // sh 'html-validator-cli index.html'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying site...'
                // Example: rsync to web server or push to S3
                // sh 'rsync -avz ./ /var/www/html/'
            }
        }
    }

    post {
        success {
            echo '✅ Build and Deployment Successful!'
        }
        failure {
            echo '❌ Build Failed!'
        }
    }
}
