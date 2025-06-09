pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
<<<<<<< HEAD
                git 'https://github.com/Jayram-Dhawal/Portfolio.git'
=======
                echo 'Cloning the repository...'
                git url: "${REPO_URL}", branch: 'master'
>>>>>>> 7964d27eb6181b1419916804bcb43a522dfc52b8
            }
        }

        stage('Build') {
            steps {
                echo 'Building...'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing...'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying...'
            }
        }
    }

    post {
        success {
            mail to: 'your-email@gmail.com',
                 subject: "✅ Jenkins Build Success: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                 body: """Hi,

The Jenkins build was successful.

🔧 Job: ${env.JOB_NAME}
🔢 Build: #${env.BUILD_NUMBER}
🔗 Link: ${env.BUILD_URL}

Thanks,
Jenkins"""
        }

        failure {
            mail to: 'your-email@gmail.com',
                 subject: "❌ Jenkins Build Failed: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                 body: """Hi,

The Jenkins build failed.

🔧 Job: ${env.JOB_NAME}
🔢 Build: #${env.BUILD_NUMBER}
🔗 Link: ${env.BUILD_URL}

Please check the logs.

Thanks,
Jenkins"""
        }
    }
}
