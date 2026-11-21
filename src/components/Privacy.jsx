import { business } from '../data/business'
import Container from './Container'

export default function Privacy() {
  return (
    <section id="privacidad" className="border-t border-brand-light bg-surface py-12 sm:py-16" aria-labelledby="privacy-heading">
      <Container className="max-w-4xl">
        <p className="text-[0.68rem] font-semibold tracking-[0.2em] text-brand-mid uppercase">Transparencia</p>
        <h2 id="privacy-heading" className="mt-2 text-xl font-extrabold text-brand uppercase sm:text-2xl">Privacidad y uso del sitio</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          EDCAR AUTOTRONIC, ubicado en {business.address}, ofrece este sitio para mostrar servicios y facilitar el contacto.
          Puedes comunicarte para consultas sobre privacidad mediante <a className="font-semibold underline underline-offset-2 text-brand" href={business.whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp al {business.whatsappDisplay}</a>.
        </p>
        <div className="mt-6 space-y-3">
          <details className="group border border-brand-light bg-white p-4">
            <summary className="cursor-pointer text-sm font-bold text-brand">¿Qué sucede con los datos del formulario?</summary>
            <p className="mt-3 text-sm leading-relaxed text-muted">El nombre, teléfono, servicio y mensaje se usan únicamente para preparar un mensaje de WhatsApp en tu dispositivo. Este sitio no guarda esos campos en una base de datos ni los envía a un servidor propio. Solo se comparten con WhatsApp y con el taller si decides enviar el mensaje desde WhatsApp. El taller podrá conservar la conversación para responder y dar seguimiento a tu solicitud; puedes pedir información o solicitar su eliminación contactándolo por ese medio.</p>
          </details>
          <details className="group border border-brand-light bg-white p-4">
            <summary className="cursor-pointer text-sm font-bold text-brand">Cookies y servicios externos</summary>
            <p className="mt-3 text-sm leading-relaxed text-muted">Esta versión del sitio no instala cookies propias de análisis, publicidad ni seguimiento. Utiliza Google Fonts para mostrar la tipografía; Google puede recibir datos técnicos de la conexión. El mapa de Google solo se carga cuando eliges verlo. Si abres Google Maps, WhatsApp, Facebook, Instagram o TikTok, se aplicarán también las condiciones y políticas de cada servicio. El proveedor de alojamiento puede registrar información técnica necesaria para prestar el servicio.</p>
          </details>
          <details className="group border border-brand-light bg-white p-4">
            <summary className="cursor-pointer text-sm font-bold text-brand">Información comercial y uso del contenido</summary>
            <p className="mt-3 text-sm leading-relaxed text-muted">Los servicios se describen con fines informativos. La disponibilidad, el diagnóstico, el alcance de cada reparación y el precio se confirman directamente con el taller antes de realizar el trabajo. Las fotografías y los elementos visuales del sitio se presentan como contenido del negocio y no deben reutilizarse sin autorización.</p>
          </details>
        </div>
        <p className="mt-5 text-xs text-muted">Aviso informativo actualizado en noviembre de 2026. Consulta cualquier duda sobre el servicio o el uso de tus datos directamente con EDCAR AUTOTRONIC.</p>
      </Container>
    </section>
  )
}
