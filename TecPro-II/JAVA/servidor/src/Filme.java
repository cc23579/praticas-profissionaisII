import java.time.LocalDate;

public class Filme {

        private int idFilme;
        private String titulo;
        private String diretor;
        private int anoLancamento;
        private String sinopse;
        private float nota;

        public Filme(String titulo, String diretor, int anoLancamento, String sinopse, float nota) {
            this.titulo = titulo;
            this.diretor = diretor;
            if (anoLancamento <= LocalDate.now().getYear()){
                this.anoLancamento = anoLancamento;
            }
            this.sinopse = sinopse;
            if (nota <= 10 || nota >= 0){
                this.nota = nota;
            }

        }
        public Filme(int idFilme, String titulo, String diretor, int anoLancamento, String sinopse, float nota) {
            this.idFilme = idFilme;
            this.titulo = titulo;
            this.diretor = diretor;
            if (anoLancamento <= (LocalDate.now().getYear())){
                this.anoLancamento = anoLancamento;
            }
            this.sinopse = sinopse;
            if (nota <= 10 || nota >= 0){
                this.nota = nota;
            }

        }


    public int getIdFilme() {
        return idFilme;
    }

    public void setIdFilme(int idFilme) {
        this.idFilme = idFilme;
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
