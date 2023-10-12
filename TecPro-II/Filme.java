import java.time.LocalDate;

public class Filme {

        private final int anoAtual = LocalDate.now().getYear();
        private String titulo;
        private String diretor;
        private int anoLancamento;
        private String sinopse;
        private float nota;



        public Filme(String titulo, String diretor, int anoLancamento, String sinopse, float nota) {
            this.titulo = titulo;
            this.diretor = diretor;
            if (anoLancamento <= anoAtual){
                this.anoLancamento = anoLancamento;
            }
            this.sinopse = sinopse;
            if (nota <= 5 || nota >= 0){
                this.nota = nota;
            }

        }

        public String getTitulo() {
            return titulo;
        }

        public void setTitulo(String titulo) {
            this.titulo = titulo;
        }

        public String getDiretor() {
            return diretor;
        }

        public void setDiretor(String diretor) {
            this.diretor = diretor;
        }

        public int getAnoLancamento() {
            return anoLancamento;
        }

        public void setAnoLancamento(int anoLancamento) {
            this.anoLancamento = anoLancamento;
        }

        public String getSinopse() {
            return sinopse;
        }

        public void setSinopse(String sinopse) {
            this.sinopse = sinopse;
        }


        public float getNota() {
            return nota;
        }

        public void setNota(float nota) {
            this.nota = nota;
        }

        @Override
        public String toString() {
            return titulo;
        }


    }
