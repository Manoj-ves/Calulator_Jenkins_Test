pipeline {
    agent any
    
    stages {
        stage("Checking node Version") {
            steps {
                bat 'node -v'
            }
        }
        
        stage("Repo cloning") {
            steps {
                git branch: 'main', url: 'https://github.com/Manoj-ves/Calulator_Jenkins_Test.git'
            }
        }
        
        stage("Run Node File") {
            steps {
                bat 'node app.js'
            }
        }
        
        stage("build") {
            steps {
                echo 'building the application..'
            }
        }
        
        stage("test") {
            steps {
                echo 'testing the application..'
            }
        }
        
        stage("deploy") {
            steps {
                echo 'deploying the application..'
            }
        }
    }
}
