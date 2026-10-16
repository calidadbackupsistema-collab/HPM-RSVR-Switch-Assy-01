# Monitoreo RSVR Switch Ass'y · HPM

Monitor de parámetros de la máquina de ensamble **A100** (línea RSVR Switch Ass'y) de Hyundai Polytech México.

- Lee los CSV que guarda la máquina (carpeta Año / Mes / Día). La PC de la máquina puede publicarlos en Firebase para consultarlos desde otras PC.
- Alarma lecturas fuera de especificación, malos ajustes de setpoint y tendencias.
- Exporta a Excel (.xlsx) con Resumen, Registros, Alarmas y Archivos.
- Sincroniza con Firebase (proyecto `HPM-RSVR-Switch-Assy-01`): receta de límites, alarmas NG y causas documentadas.

Sitio: https://calidadbackupsistema-collab.github.io/HPM-RSVR-Switch-Assy-01/

## Archivos
| Archivo | Uso |
|---|---|
| `index.html` | Estación (PC de piso) |
| `consulta.html` | Acceso a la información (solo lectura + Excel) |
| `rsvr-config.js` | Credenciales web de Firebase |
| `firestore.rules` | Reglas de seguridad de Firestore |
| `firebase.json` | Solo si se publica también con Firebase Hosting |

## Colecciones en Firestore
- `rsvr_config/receta` – límites y tipo de cada parámetro
- `rsvr_alarmas` – alarmas NG detectadas
- `rsvr_causas` – causa / acción documentada por alarma
- `rsvr_dias` – índice de archivos publicados por la estación, por día
- `rsvr_csv` – contenido de los CSV publicados por la estación

## Dos páginas
| Página | Liga | Uso |
|---|---|---|
| Estación | https://calidadbackupsistema-collab.github.io/HPM-RSVR-Switch-Assy-01/ | Solo en la PC de piso: "Ubicar carpeta". Publica sola en Firebase. Dejar la pestaña abierta. |
| Consulta | https://calidadbackupsistema-collab.github.io/HPM-RSVR-Switch-Assy-01/consulta.html | Cualquier PC: solo lectura y exportación a Excel. |

- `rsvr_estado/estacion` – señal de vida de la estación (la consulta muestra si está en línea)
