pipeline {
  agent any
    stages {      
        stage ('Dependencias') {
            steps {
                sh 'nvm install cypress -D'
            }
        }
        stage ('Executando testes DESKTOP - CHROME') {
            steps {
                echo 'Executando DESKTOP - CHROME'
            }
        }
        stage ('Executando testes DESKTOP - FIREFOX') {
			steps {
				echo 'Executando testes DESKTOP - FIREFOX'
			}      
        }
    }
}
