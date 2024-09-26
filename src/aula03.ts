/* Configuração de Compliação */

class Curso {
  canal = null;
  curso = null;
  constructor(canal: any, curso: any) {
    this.canal = canal;
    this.curso = curso;
  }
}

/* 
- 'tsc --init' cria o arquivo de configuração do ts;

Nas configurações:
- "rootDirs": ["./src"]; para identificar o local dos arquivos raiz;
-  "target": "ESNext"; para identificar a ultima versão do ECMA;
- "removeComments": true; para remover os comentarios no build.

No terminal agora da para efetuar o build apenas com 'tsc';
Pode-se usar tambem 'tsc --watch' para estar compilando a cada vez que o arquivo for salvo.

*/
