pipeline {
    agent any

    stages {
    	stage('Build & Deploy') {
            steps {
                sh """sudo -u ubuntu bash -c 'cd /home/antino/solutionEc-Fe && bash deploy.sh'
                """
            }
        } 
        
    }
}
//
