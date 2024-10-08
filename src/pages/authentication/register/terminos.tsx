import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from '@/components/ui/card';

export const description = "Terminos y condiciones.";

export function Terminos() {

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="mx-auto max-w-3xl">
        <CardHeader>
          <CardTitle className="text-2xl">Términos y Condiciones</CardTitle>
          <CardDescription>
            A continuación se presentan los términos y condiciones para el uso de nuestros servicios.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h2 className="text-xl font-semibold">Aceptación de los Términos</h2>
          <p>
            Al utilizar nuestros servicios, aceptas cumplir con estos términos y condiciones.
          </p>
          <h2 className="text-xl font-semibold mt-4">Modificaciones</h2>
          <p>
            Nos reservamos el derecho a modificar estos términos en cualquier momento. Te notificaremos sobre los cambios.
          </p>
          <h2 className="text-xl font-semibold mt-4">Uso de los Servicios</h2>
          <p>
            Eres responsable de usar nuestros servicios de manera legal y conforme a las leyes aplicables.
          </p>
          <h2 className="text-xl font-semibold mt-4">Propiedad Intelectual</h2>
          <p>
            Todos los derechos de propiedad intelectual relacionados con nuestros servicios son propiedad de [Nombre de la Empresa].
          </p>
          <h2 className="text-xl font-semibold mt-4">Limitación de Responsabilidad</h2>
          <p>
            No somos responsables por daños o pérdidas que puedan resultar del uso de nuestros servicios.
          </p>
          <h2 className="text-xl font-semibold mt-4">Ley Aplicable</h2>
          <p>
            Estos términos se regirán e interpretarán de acuerdo con las leyes de [País].
          </p>
          <h2 className="text-xl font-semibold mt-4">Contacto</h2>
          <p>
            Si tienes alguna pregunta sobre estos términos, contáctanos a través de [correo electrónico].
          </p>
        </CardContent>
      </Card>
    </div>
  );
  
  }
  export default Terminos;
  