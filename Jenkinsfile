pipeline {
  agent any
    stages {
        stage ('Clonando repositório') {
        steps {
            git 'https://github.com/Dionisio1/Diesel-Automacao.git'
        }
        }        
        stage ('Instalando dependencias') {
        steps {
            bat 'npm install'
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
