## Los tres caminos para un proyecto de IA

Una plataforma no-code o low-code permite conectar aplicaciones y modelos con flujos visuales. Un producto armado resuelve un caso común mediante configuración. Un desarrollo a medida construye software alrededor de un proceso propio, desde un MVP hasta un sistema mantenido en operación. Son caminos distintos, y se pueden combinar por etapas.

La primera decisión es describir el proceso y sus excepciones. Si todas las empresas hacen esa tarea de manera parecida, un producto puede ahorrar trabajo. Si tu proceso cambia seguido o depende de sistemas propios, el ajuste y el control pasan a pesar más que la velocidad inicial.

## La comparación en una tabla

Usá esta matriz para evaluar la misma necesidad en los tres caminos. Las respuestas concretas dependen de la plataforma, el producto y el alcance de desarrollo que estés comparando.

| Criterio | No-code | Producto armado | A medida |
| --- | --- | --- | --- |
| Validación inicial | Rápida si ya existen conectores | Rápida si el caso coincide | Requiere definir un MVP |
| Ajuste al proceso | Bueno para pasos estándar | Limitado por la configuración | Diseñado alrededor del proceso |
| Sistemas propios | Depende de conectores y API | Depende del producto | Se diseña la integración |
| Control de datos y modelo | Según plataforma y contrato | Según proveedor | Se define en arquitectura y contrato |
| Auditoría | Variable según el plan | Variable según el producto | Puede diseñarse para cada ejecución |
| Mantenimiento | Equipo interno o plataforma | Proveedor y configuración | Equipo propio o proveedor contratado |
| Cambios y volumen | Puede complejizar flujos y costos | Depende del roadmap del producto | Requiere evolución planificada |
| Costo total | Licencia, ejecuciones y trabajo interno | Suscripción, configuración y soporte | Construcción, operación y evolución |

No hay un ganador para todos los casos. La tabla sirve para señalar dónde pedir una prueba, una cláusula o una estimación de operación antes de firmar.

Para usarla, elegí un pedido que hoy sucede de verdad y pedí a cada propuesta que muestre cómo lo resolvería. No alcanza con marcar una celda como «sí»: solicitá qué conector se usaría, qué permisos tendría, cómo se registraría una falla y quién respondería cuando el proceso cambie. Esas respuestas vuelven comparables ofertas que, en una presentación comercial, parecen equivalentes.

## Cuándo alcanza una plataforma no-code

Alcanza cuando el flujo es repetible, el volumen es manejable, las integraciones existen y el equipo puede entender y mantener lo construido. Para validar demanda o conectar dos sistemas habituales, puede ser la elección más simple. Si resuelve el problema con permisos y medición adecuados, desarrollar desde cero no aporta valor.

Deja de alcanzar cuando las excepciones se multiplican, el flujo es difícil de auditar, aparece un sistema propio sin conector o cada cambio exige trabajo frágil. También conviene revisar el costo por ejecución y la dependencia de una sola plataforma antes de escalar.

## ¿Workflow determinista o agente de IA?

Si la misma entrada debe seguir siempre los mismos pasos, un workflow determinista suele ser más claro para construir y auditar. Un agente se justifica cuando el pedido llega en lenguaje libre y debe elegir entre acciones permitidas. Aun en ese caso, la ejecución final puede quedar en un flujo con reglas fijas.

La elección del grado de autonomía merece una decisión separada de la herramienta. La guía [agente de IA vs chatbot](/blog/agente-de-ia-vs-chatbot) explica qué cambia cuando un sistema pasa de responder a ejecutar. Si necesitás un agente en un canal, revisá el [desarrollo de asistentes de IA](/servicios/asistentes-ia).

## ¿Validar con no-code y migrar después?

Puede funcionar si documentás el proceso, mantenés las cuentas y los datos bajo control de tu empresa y sabés qué aprendizaje querés obtener. Antes de empezar, anotá qué parte del flujo podría trasladarse y cuál habría que rehacer. Una prueba sin esa preparación puede dejar una dependencia costosa.

Otra opción es un MVP a medida con una hipótesis cerrada y usuarios reales. La elección depende de cuánto del proceso es propio y de las integraciones necesarias. En ambos casos, la pregunta es la misma: ¿qué evidencia permitiría decidir el paso siguiente? También conviene mirar [por qué algunos pilotos de IA no llegan a producción](/blog/por-que-fallan-los-proyectos-de-ia).

## Qué pesa en el costo a largo plazo

Compará licencias o ejecuciones, consumo de modelos, integraciones, mantenimiento, cambios de proveedor y horas de tu equipo. Un costo inicial bajo puede esconder mucho trabajo manual; un desarrollo inicial mayor puede ser excesivo para un caso estándar. Pedí el costo total del proceso, no solo el precio de la herramienta.

La dependencia técnica tiene un mecanismo concreto: si agente, modelo y proveedor están unidos en una sola pieza, cambiar uno obliga a rehacer los demás. Una arquitectura que separa esas decisiones cuesta diseñarla, pero facilita evaluar opciones cuando cambian condiciones o necesidades.

## Quién mantiene un desarrollo a medida

Un sistema propio necesita alguien que corrija errores, actualice integraciones y adapte el proceso. Preguntá de quién es el código, dónde vive el repositorio, qué documentación queda y quién puede operar el sistema si termina el contrato. El mantenimiento no es un extra inesperado; es parte de la decisión de construir.

Pedí una entrega que otra persona pueda retomar: instrucciones para desplegar, un mapa de integraciones, decisiones de permisos y una lista de límites conocidos. Si el proveedor continuará operándolo, acordá cómo se priorizan cambios y cómo se informa una incidencia. Si lo asumirá tu equipo, incluí tiempo de transferencia de conocimiento en el alcance.

La página de [desarrollo de software con IA](/servicios/desarrollo-software-ia) de Data Voices distingue el MVP de la etapa de soporte y evolución. Esa separación ayuda a pedir entregables claros: una primera versión usable y un plan para extenderla sin romper lo que ya funciona.

## ¿Construir desde cero o sobre lo que ya tenés?

No hace falta reemplazar todo el sistema actual. Un módulo puede conectarse a las fuentes que tu equipo ya usa, siempre que existan accesos y una definición clara de permisos. Empezá por un proceso y una fuente. La estrategia de [IA sobre tus datos](/servicios/ia-sobre-datos) usa ese criterio para evitar una migración completa como requisito inicial.

## Tres ejemplos construidos por Data Voices

Como producto armado, [Cecilia](/cecilia) cubre casos comunes de atención y agenda por WhatsApp. Si el proceso es más específico, se evalúa un agente a medida.

Como desarrollo a medida, el [Real Time Interview Agent](/casos/real-time-interview-agent) procesa audio durante entrevistas sin sumarse a la llamada y puede pasar a transcripción local si falla la conexión. Su flujo principal está presentado como en producción.

[Agent Launcher](/casos/agent-launcher) separa agente, modelo y proveedor, y registra cada ejecución. Es un MVP validado técnicamente; ese estado es distinto del de un producto ya operando con usuarios.

## Preguntas frecuentes

### ¿Conviene no-code o desarrollo a medida para un proyecto de IA?

No-code conviene cuando el proceso es estándar, hay conectores y el equipo puede mantener el flujo. A medida tiene sentido cuando el proceso es propio, necesita integración específica o exige control detallado de permisos y auditoría. Compará ambos contra el mismo caso real.

### ¿Cuándo deja de alcanzar una herramienta no-code?

Cuando las excepciones vuelven difícil entender el flujo, una integración propia no cabe en los conectores o el costo y la trazabilidad dejan de ser aceptables. No es una regla por tamaño de empresa: es una cuestión de complejidad, control y mantenimiento.

### ¿Qué herramienta de automatización conviene para una pyme?

Elegí por proceso, conectores disponibles, lugar donde se alojan los datos, costo total y quién mantendrá el flujo. Probá con un pedido real antes de contratar. Una marca popular no compensa una integración débil o la falta de una persona responsable.

### ¿Puedo validar con no-code y migrar después?

Sí, si la prueba deja documentado el proceso y los datos y cuentas permanecen bajo tu control. Definí de antemano qué resultado justificará la migración. Parte del trabajo puede necesitar rehacerse, así que conviene considerar ese costo desde el primer día.

### ¿Qué sale más caro a largo plazo?

Depende del uso. Sumá licencias, ejecuciones, modelos, integraciones, soporte, cambios de proveedor y horas del equipo. Para un caso estándar, un producto puede ser suficiente. Para un proceso propio de alto uso, el costo de adaptar una plataforma también puede crecer.

### ¿Cuándo conviene un workflow y no un agente?

Cuando los pasos son fijos y los datos llegan estructurados, un workflow suele ser más fácil de probar y auditar. Un agente se justifica cuando debe interpretar lenguaje libre y escoger entre acciones permitidas. La elección debe incluir una regla de revisión humana para casos sensibles.

### ¿Quién mantiene un desarrollo a medida?

Debe quedar definido en el contrato y en la entrega. Pedí repositorio, documentación, accesos y responsabilidades de soporte. El equipo interno puede asumirlo, el proveedor puede continuar o pueden compartirlo, pero la transición tiene que ser posible sin perder conocimiento.

### ¿Hay que construir desde cero?

No necesariamente. Se puede agregar un módulo a sistemas existentes o conectar una fuente de datos concreta. Primero verificá accesos, calidad de esa fuente y el proceso que querés mejorar. Reemplazar toda la plataforma rara vez es un requisito para validar un caso.

## Cómo decidir

Si el proceso es estándar, probá la opción más simple que deje tus datos y cuentas bajo control. Si es propio, tiene integraciones específicas o exige auditoría, pedí un alcance acotado a medida. En ambos casos, medí con usuarios reales antes de ampliar.
