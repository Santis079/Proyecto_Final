import java.util.HashMap;
import java.util.Map;
class Producto {
    private int id;
    private String nombre;
    private double precio;

    public Producto(int id, String nombre, double precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }

    public int getId() {
        return id;
    }

    public String getNombre() {
        return nombre;
    }

    public double getPrecio() {
        return precio;
    }
}

class CarritoDeCompras {
    private Map<Integer, Producto> productosEnCarrito;

    public CarritoDeCompras() {
        this.productosEnCarrito = new HashMap<>();
    }

    public void agregarProducto(Producto producto) {
        productosEnCarrito.put(producto.getId(), producto);
    }

    public void mostrarCarrito() {
        System.out.println("Productos en el carrito:");
        for (Producto producto : productosEnCarrito.values()) {
            System.out.println("ID: " + producto.getId() + ", Nombre: " + producto.getNombre() + ", Precio: $" + producto.getPrecio());
        }
    }

    public double calcularTotal() {
        double total = 0;
        for (Producto producto : productosEnCarrito.values()) {
            total += producto.getPrecio();
        }
        return total;
    }
}

public class Tarracommerce {
    private static final String ADMIN_PASSWORD = "CajaR";
    private static Map<String, Map<String, Object>> stockProductos = new HashMap<>();
    private static Map<String, Integer> carrito = new HashMap<>();
    private static Map<String, Integer> ventas = new HashMap<>();
    private static double ivaPorDefecto = 0.21; // IVA por defecto (21%)

    private static Map<Integer, Producto> catalogoProductos = new HashMap<>();
    private static CarritoDeCompras carritoDeCompras = new CarritoDeCompras();

    public static void main(String[] args) {
        inicializarBaseDeDatos();
        mostrarProductosDisponibles();

        Tienda tienda = new Tienda();
        tienda.iniciarVentas();
    }

    static class Tienda {

        private Map<String, Double> productos;

        public Tienda() {
            productos = new HashMap<>();
        }

        public void iniciarVentas() {
            gestionarVentas();
        }

        private void gestionarVentas() {
        }

        private void agregarProducto() {

        }

        private void agregarCarrito() {
        }

        private void modificarProducto() {

        }

        private void verStock() {

        }
    }

    private static void inicializarBaseDeDatos() {

        catalogoProductos.put(1, new Producto(1, "Producto 1", 50.0));
        catalogoProductos.put(2, new Producto(2, "Producto 2", 65.0));
        catalogoProductos.put(3, new Producto(3, "Producto 3", 80.0));
    }

    private static void mostrarProductosDisponibles() {
        System.out.println("Productos disponibles:");
        for (Producto producto : catalogoProductos.values()) {
            System.out.println("ID: " + producto.getId() + ", Nombre: " + producto.getNombre() + ", Precio: $" + producto.getPrecio());
        }
    }
}