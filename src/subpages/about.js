import React from "react";
import '../style/About.css';
import CHeader from '../components/CHeader.js';
import { CNavbar } from '../components/CNavbar.js';

export default function About() {

  return (
    <div className="about-main">
      <CHeader />
      <CNavbar start={true} about={false} content={true}/>
      <div className="about-div">
         <h1>About site</h1>
         <p className="about-p">Kod źródłowy Unity został napisany głównie w języku C++. Silnik umożliwia pisanie skryptów w trzech językach: UnityScript (podobieństwo składni do JavaScript), C# oraz Boo. Wraz z wersją silnika 5 została usunięta możliwość tworzenia skryptów w języku Boo, choć można nadal z niego korzystać przez środowisko MonoDevelop oraz skrypty napisane w tym języku będą poddawane kompilacji. Począwszy od wersji 2018.2 zakończyło się wsparcie dla UnityScript[6] i istnieje jedynie możliwość kompilacji.

Do wersji 4.6 silnik był udostępniany na licencji płatnej lub darmowej zawierającej ograniczoną funkcjonalność, ale wraz z premierą Unity 5 prawie wszystkie funkcje silnika udostępniono w wersji darmowej dla twórców nie przekraczających 100 tysięcy dolarów dochodów rocznie[7].

Unity oferuje również tzw. Asset Store, który umożliwia skorzystanie z płatnych lub darmowych komponentów takich jak tekstury lub skrypty[8].

Silnik ma też możliwość importu bibliotek dynamicznych (DLL), które mogą być importowane w skrypcie i wykorzystywane w dalszej fazie produkcji[potrzebny przypis].

Gry stworzone na silniku Unity w wersji 5.1.1 obsługują 22 platformy sprzętowe, są to między innymi Windows, Linux, Android. Wśród nich znajdują się także konsole siódmej oraz ósmej generacji. Kompatybilne z Unity są również gogle rzeczywistości wirtualnej takie jak Oculus Rift i Samsung Gear VR. Gry stworzone w Unity po zainstalowaniu wtyczki Unity Web Player mogą działać również w przeglądarce internetowej.

Dla wersji 5.1.1 poprzez pobranie pliku instalacyjnego można dodać obsługę platformy Tizen, mobilnego systemu operacyjnego opartego o jądro Linuxa[potrzebny przypis].</p>
      </div>
    </div>
  );
}
