import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class SqlConnectionExample {
    public void conection() {
        String url = "jdbc:sqlserver://regulus.cotuca.unicamp.br:1433;database=BD23121";
        String user = "BD23121";
        String password = "BD23121";
        try {
            Connection connection = DriverManager.getConnection(url, user, password);
            // Agora você tem uma conexão com o SQL Server.
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
