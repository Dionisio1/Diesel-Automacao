pipeline {
  agent any
    stages {
        stage ('BUILD') {
            steps {
                docker { image 'projeto-Automacao' }
            }
        }        
        stage ('Instalando dependencias') {
            steps {
                sh 'npm install -D cypress'
            }
        }
        stage ('Executando testes DESKTOP - CHROME') {
            steps {
                bat 'npm run cy-chrome'
            }
        }
        stage ('Executando testes DESKTOP - FIREFOX') {
        steps {
            bat 'npm run cy-firefox'
        }      
        }
    }
}
