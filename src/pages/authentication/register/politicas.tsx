
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from '@/components/ui/card';
import { NavBar } from '@/pages/authentication/nav/nav';

export const description = "Politicas de privacidad";

export function Politicas() {

  return (
    <><NavBar /><div className="flex justify-center items-center h-screen">
      <Card className="mx-auto max-w-3xl">
        <CardHeader>
          <CardTitle className="text-2xl">Políticas de Privacidad</CardTitle>
          <CardDescription>
            En esta página encontrarás cómo manejamos tus datos personales.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h2 className="text-xl font-semibold">Introducción</h2>
          <p>
            Nuestra política de privacidad describe cómo recopilamos, usamos, y compartimos tu información personal cuando utilizas nuestros servicios.
          </p>
          <h2 className="text-xl font-semibold mt-4">Información que Recopilamos</h2>
          <p>
            Recopilamos información que nos proporcionas directamente, como tu nombre y dirección de correo electrónico.
          </p>
          <h2 className="text-xl font-semibold mt-4">Cómo Usamos tu Información</h2>
          <p>
            Utilizamos tu información para proporcionar, mantener y mejorar nuestros servicios, así como para comunicarnos contigo.
          </p>
          <h2 className="text-xl font-semibold mt-4">Cómo Compartimos tu Información</h2>
          <p>
            No compartimos tu información personal con terceros sin tu consentimiento, excepto cuando sea necesario para proporcionar nuestros servicios.
          </p>
          <h2 className="text-xl font-semibold mt-4">Seguridad</h2>
          <p>
            Implementamos medidas de seguridad para proteger tu información, pero no podemos garantizar una seguridad absoluta.
          </p>
          <h2 className="text-xl font-semibold mt-4">Tus Derechos</h2>
          <p>
            Tienes derecho a acceder, corregir y eliminar tu información personal.
          </p>
          <h2 className="text-xl font-semibold mt-4">Cambios a esta Política</h2>
          <p>
            Podemos actualizar esta política de privacidad de vez en cuando. Te notificaremos sobre cualquier cambio.
          </p>
          <h2 className="text-xl font-semibold mt-4">Contacto</h2>
          <p>
            Si tienes alguna pregunta sobre nuestra política de privacidad, contáctanos a través de [correo electrónico].
          </p>
        </CardContent>
      </Card>
    </div></>
  );

}
export default Politicas;
