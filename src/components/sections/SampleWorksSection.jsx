import SectionIntro from "../common/SectionIntro";
import styles from "./SampleWorksSection.module.css";

function SampleWorksSection({ sampleWorks, activeWork, onSelectWork }) {
  return (
    <section className={styles.section} id="lab">
      <SectionIntro
        eyebrow="Muestras Kinet"
        title="Este modulo no es una galeria. Es un escenario para subir piezas que se activan."
        description="Aqui puedes cargar renders, loops, capturas o mini demos reales. La estructura ya esta lista para mostrar un caso con ritmo, contexto y una presencia menos convencional."
      />

      <div className={styles.topRail}>
        {sampleWorks.map((work) => {
          const isActive = work.id === activeWork.id;

          return (
            <button
              key={work.id}
              className={isActive ? styles.railButtonActive : styles.railButton}
              onClick={() => onSelectWork(work.id)}
              type="button"
              data-cursor="click"
            >
              <span>{work.code}</span>
              <strong>{work.title}</strong>
            </button>
          );
        })}
      </div>

      <div className={styles.labShell}>
        <article className={styles.previewShell}>
          <div className={styles.previewTopline}>
            <span>{activeWork.category}</span>
            <span>Experiencia Interactiva</span>
          </div>

          <div 
            className={styles.previewStage} 
            data-cursor="click"
            onClick={() => window.open(activeWork.url, "_blank")}
          >
            <div className={styles.previewNoise} aria-hidden="true" />
            <div className={styles.previewBeam} aria-hidden="true" />
            
            {activeWork.image && (
              <div className={styles.previewImageWrap}>
                <img src={activeWork.image} alt={activeWork.title} className={styles.previewImage} />
                <div className={styles.previewImageOverlay} />
              </div>
            )}

            <div className={styles.previewContent} key={activeWork.id}>
              <p>{activeWork.code} — {activeWork.sector}</p>
              <h3>{activeWork.title}</h3>
              <span className={styles.previewSolution}>{activeWork.solution}</span>
            </div>

            <div className={styles.hoverCTA}>
              <span className={styles.ctaButton}>
                PROBAR DEMO EN VIVO
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px' }}>
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </span>
            </div>

            <div className={styles.surfaceBand}>
              {activeWork.surfaces.map((surface) => (
                <i key={surface}>{surface}</i>
              ))}
            </div>
          </div>
        </article>

        <aside className={styles.dossierShell}>
          <div className={styles.dossierIntro}>
            <p>Pieza activa</p>
            <h3>{activeWork.title}</h3>
            <span>{activeWork.summary}</span>
          </div>

          <div className={styles.dossierGrid}>
            <article className={styles.dossierCard}>
              <small>Interacciones</small>
              <ul>
                {activeWork.interactions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className={styles.dossierCard}>
              <small>El Problema</small>
              <p>{activeWork.problem}</p>
            </article>

            <article className={styles.dossierCardLink}>
              <small>Lanzamiento</small>
              <a 
                href={activeWork.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.liveLinkBtn}
                data-cursor="click"
              >
                PROBAR DEMO ONLINE ↗
              </a>
              <p className={styles.dossierNote}>{activeWork.note}</p>
            </article>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default SampleWorksSection;
