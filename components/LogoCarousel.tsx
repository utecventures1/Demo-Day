import React from 'react';

// Importaciones de todos tus logos SVG
import Agros from '../src/assets/logos/agros.svg?react';
import AprendiendoLa from '../src/assets/logos/aprendiendo_la_w.svg?react';
import Bend from '../src/assets/logos/bend_w.svg?react';
import Bildin from '../src/assets/logos/bildin_w.svg?react';
import Canduit from '../src/assets/logos/canduit_w.svg?react';
import Coderhouse from '../src/assets/logos/coderhouse_w.svg?react';
import Compadre from '../src/assets/logos/compadre_w.svg?react';
import Confianza from '../src/assets/logos/confianza_w.svg?react';
import Cuentologia from '../src/assets/logos/cuentologia_w.svg?react';
import Cuik from '../src/assets/logos/cuik_w.svg?react';
import Diloo from '../src/assets/logos/diloo_w.svg?react';
import DomusAi from '../src/assets/logos/domus_ai_w.svg?react';
import Elsa from '../src/assets/logos/elsa_w.svg?react';
import Fitco from '../src/assets/logos/fitco_w.svg?react';
import Fitia from '../src/assets/logos/fitia_w.svg?react';
import Foodbox from '../src/assets/logos/foodbox_w.svg?react';
import Fran from '../src/assets/logos/fran_w.svg?react';
import Freshmart from '../src/assets/logos/freshmart_w.svg?react';
import Hapi from '../src/assets/logos/hapi_w.svg?react';
import Hashi from '../src/assets/logos/hashi_w.svg?react';
import Igua from '../src/assets/logos/igua_w.svg?react';
import Joinnus from '../src/assets/logos/joinnus_w.svg?react';
import Livo from '../src/assets/logos/livo_w.svg?react';
import ManzanaVerde from '../src/assets/logos/manzana_verde_w.svg?react';
import Mesa24_7 from '../src/assets/logos/mesa24_7_w.svg?react';
import Mineclass from '../src/assets/logos/mineclass_w.svg?react';
import Mokeyfit from '../src/assets/logos/mokeyfit_w.svg?react';
import Nanda from '../src/assets/logos/nanda_w.svg?react';
import Netzun from '../src/assets/logos/netzun_w.svg?react';
import Nos from '../src/assets/logos/nos_w.svg?react';
import Openmed from '../src/assets/logos/openmed_w.svg?react';
import Peopl from '../src/assets/logos/peopl_w.svg?react';
import Prendea from '../src/assets/logos/prendea_w.svg?react';
import Qimi from '../src/assets/logos/qimi_w.svg?react';
import Qolores from '../src/assets/logos/qolores_w.svg?react';
import Questudiar from '../src/assets/logos/questudiar_w.svg?react';
import Quix from '../src/assets/logos/quix_w.svg?react';
import Rebajatuscuentas from '../src/assets/logos/rebajatuscuentas_w.svg?react';
import Riqra from '../src/assets/logos/riqra_w.svg?react';
import SinEnvolturas from '../src/assets/logos/sinenvolturas_w.svg?react';
import Syntax from '../src/assets/logos/syntax_w.svg?react';
import Talently from '../src/assets/logos/talently.svg?react';
import Talentum from '../src/assets/logos/talentum_w.svg?react';
import TecnologiasPeruanas from '../src/assets/logos/tecnologias_peruanas_w.svg?react';
import Tullpi from '../src/assets/logos/tullpi_w.svg?react';
import Udocz from '../src/assets/logos/udocz_w.svg?react';
import Vera from '../src/assets/logos/vera_w.svg?react';
import Viajamas from '../src/assets/logos/viajamas_w.svg?react';
import Vua from '../src/assets/logos/vua_w.svg?react';
import Wally from '../src/assets/logos/wally_w.svg?react';
import Xshirt from '../src/assets/logos/xshirt_w.svg?react';

// Array con todos los componentes de logo importados
const LOGOS = [
  Agros,
  AprendiendoLa,
  Bend,
  Bildin,
  Canduit,
  Coderhouse,
  Compadre,
  Confianza,
  Cuentologia,
  Cuik,
  Diloo,
  DomusAi,
  Elsa,
  Fitco,
  Fitia,
  Foodbox,
  Fran,
  Freshmart,
  Hapi,
  Hashi,
  Igua,
  Joinnus,
  Livo,
  ManzanaVerde,
  Mesa24_7,
  Mineclass,
  Mokeyfit,
  Nanda,
  Netzun,
  Nos,
  Openmed,
  Peopl,
  Prendea,
  Qimi,
  Qolores,
  Questudiar,
  Quix,
  Rebajatuscuentas,
  Riqra,
  SinEnvolturas,
  Syntax,
  Talently,
  Talentum,
  TecnologiasPeruanas,
  Tullpi,
  Udocz,
  Vera,
  Viajamas,
  Vua,
  Wally,
  Xshirt,
];

// Componente para renderizar la lista de logos, para no repetir código.
const LogoList: React.FC = () => (
  <div className="flex-shrink-0 flex items-center justify-around"> {/* Usamos justify-around para un espaciado consistente */}
    {LOGOS.map((Logo, index) => (
      <div key={index} className="px-8 lg:px-12"> {/* Añadimos padding para el espaciado en lugar de margin */}
        <Logo className="h-8 sm:h-9 lg:h-10 transition-opacity duration-300 opacity-70 hover:opacity-100"  />
      </div>
    ))}
  </div>
);


const LogoCarousel: React.FC = () => {
  
  const animationDuration = "300s";

  // 2. Definimos los keyframes de la animación directamente en el componente usando un <style> tag.
  // Esto asegura que la lógica está 100% contenida aquí.
  const keyframes = `
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `;
  
return (
    <section className="bg-[#0D1117] py-8 sm:py-10 group">
      {/* Etiqueta <style> para inyectar los keyframes en el documento */}
      <style>{keyframes}</style>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="relative overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
          }}
        >
          {/* 3. Aplicamos la animación usando el atributo 'style' para un control total */}
          <div 
            className="flex w-fit group-hover:[animation-play-state:paused]"
            style={{
              animationName: 'scroll',
              animationDuration: animationDuration,
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite',
            }}
          >
            <LogoList />
            <LogoList />
            <LogoList />

          </div>
        </div>
      </div>
    </section>
  );
};



export default LogoCarousel;