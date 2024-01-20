import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpContext;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.Headers;
import java.net.InetSocketAddress;
import java.io.IOException;
import java.io.OutputStream;
import java.io.File;
import java.nio.file.Files;
import java.net.URI;

public class webserver {

	public static void main(String[] args) throws IOException {
		HttpServer server = HttpServer.create(new InetSocketAddress(8000), 0);
		HttpContext context = server.createContext("/");
		context.setHandler( (exchange) -> {
			URI path = exchange.getRequestURI();
			System.out.println("new request for: " + path.toString());

			String requestedFile = path.toString().replace("/", "");
			File inFile = new File(requestedFile);

			Headers responseHeaders = exchange.getResponseHeaders();
			exchange.sendResponseHeaders(200, inFile.length());

			OutputStream outStream = exchange.getResponseBody();
			Files.copy(inFile.toPath(), outStream);
			//outStream.write(response.getBytes());
			outStream.close();
		});
		server.start();
	}
}

