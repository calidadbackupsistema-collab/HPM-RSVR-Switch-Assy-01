# Monitoreo RSVR Switch Ass'y · HPM

Monitor de parámetros de la máquina de ensamble **A100** (línea RSVR Switch Ass'y) de Hyundai Polytech México.

- Lee localmente los CSV que guarda la máquina (carpeta Año / Mes / Día). Los CSV **no se suben** a internet.
- Alarma lecturas fuera de especificación, malos ajustes de setpoint y tendencias.
- Exporta a Excel (.xlsx) con Resumen, Registros, Alarmas y Archivos.
- Sincroniza con Firebase (proyecto `HPM-RSVR-Switch-Assy-01`): receta de límites, alarmas NG y causas documentadas.

Sitio: https://calidadbackupsistema-collab.github.io/HPM-RSVR-Switch-Assy-01/

## Archivos
| Archivo | Uso |
|---|---|
| `index.html` | El monitor (página que abre GitHub Pages) |
| `rsvr-config.js` | Credenciales web de Firebase |
| `firestore.rules` | Reglas de seguridad de Firestore |
| `firebase.json` | Solo si se publica también con Firebase Hosting |

## Colecciones en Firestore
- `rsvr_config/receta` – límites y tipo de cada parámetro
- `rsvr_alarmas` – alarmas NG detectadas
- `rsvr_causas` – causa / acción documentada por alarma
