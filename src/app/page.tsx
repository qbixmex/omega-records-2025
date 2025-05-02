import Image from "next/image";

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-[auto_1fr_auto] justify-center min-h-screen">

      <header className="inline-flex justify-center p-5">
        <Image
          src="/images/omega-records-logo.png"
          alt="Omega Records Logo"
          width={238}
          height={80}
        />
      </header>

      <main className="container mx-auto px-5 grid place-content-center">
        <h1 className="text-4xl font-semibold italic text-center mt-5 mb-10">Estudio de grabación y producción musical.</h1>

        <section className="bg-slate-900 p-10 rounded-lg max-w-[600px] mx-auto">
          <h2 className="text-2xl mb-5">¿ Quienes Somos ?</h2>

          <div className="flex flex-col gap-2">
            <p>Somos una Productora, Sello Discográfico y Estudio de Grabación en Guadalajara Jalisco México.</p>

            <p>Ofrecemos Servicios Integrales para la Grabación, Mezcla, Producción y Masterización para cualquier tipo de Proyecto Musical.</p>

            <p>Contamos con un Equipo de Trabajo Altamente Capacitado que te Ayudara a cubrir cada una de las necesidades de tu Proyecto</p>
          </div>
        </section>
      </main>

      <footer className="p-5">
        <p className="text-gray-400 text-center text-sm">&copy; 2025 Omega Records</p>
      </footer>

    </div>
  );
};

export default HomePage;
