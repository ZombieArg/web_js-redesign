## Qué es un chatbot y qué es un agente de IA

Un chatbot con IA conversa en lenguaje natural y responde sobre una base de conocimiento. Un agente de IA da un paso más: toma un pedido, consulta el sistema que tiene la respuesta y ejecuta una acción acotada, como agendar, responder, filtrar candidatos o activar un flujo, dentro de los permisos que alguien definió.

En la práctica hay tres niveles:

1. Bot de flujos: menús y reglas fijas, sin interpretación de lenguaje libre.
2. Chatbot con IA: entiende preguntas escritas como las escribe la gente y responde con lo que dice su base de conocimiento.
3. Agente de IA: consulta sistemas y ejecuta acciones con permisos.

La definición que usa Data Voices para sus [agentes de IA para empresas](/servicios/asistentes-ia) lo resume así: un agente conecta un canal (WhatsApp, web o interno) con datos y acciones. Lo que separa los niveles es qué puede hacer el sistema después de entender el pedido.

## Las diferencias en una tabla: cinco criterios para decidir

Chatbot y agente de IA se diferencian en cinco criterios: canal, fuente de verdad, acciones permitidas, criterio de escalamiento a una persona y medición. El canal puede ser el mismo. Lo que cambia es de dónde sale la respuesta, qué puede ejecutar el sistema, cuándo deriva a alguien del equipo y qué KPI define si funciona.

| Criterio | Chatbot | Agente de IA | Qué definir antes de contratar |
| --- | --- | --- | --- |
| 1. Canal | WhatsApp, web o canal interno | El mismo canal | Dónde vive hoy la conversación con tus clientes o tu equipo |
| 2. Fuente de verdad | Documentos o base de conocimiento | El sistema que tiene la respuesta real: CRM, base de datos o catálogo | Qué sistema responde de verdad y quién habilita el acceso |
| 3. Acciones permitidas | Ninguna: informa | Pasos acotados: agendar, cargar, filtrar o activar un flujo | Qué ejecuta sin supervisión y qué necesita aprobación |
| 4. Criterio de escalamiento a una persona | Deriva cuando no encuentra la respuesta | Deriva según reglas definidas, con el contexto de la conversación | Cuándo deriva, a quién y con qué información |
| 5. Medición | Consultas respondidas | Pasos resueltos y el KPI de negocio que se mueve | Qué KPI define si funciona y desde cuándo se mide |

### Canal

El canal es el que usa tu cliente, y el tipo de herramienta lo deciden los otros cuatro criterios. Pregunta para el proveedor: «¿Funciona en el canal donde hoy están nuestras conversaciones?».

### Fuente de verdad

La fuente de verdad es el sistema que responde de verdad: CRM, base de datos o catálogo. Pregunta para el proveedor: «¿De qué sistema sale cada respuesta y cómo se mantiene actualizada?».

### Acciones permitidas

Las acciones permitidas fijan qué puede ejecutar el agente sin supervisión. Pregunta para el proveedor: «¿Qué acciones ejecuta solo y cuáles necesitan la aprobación de una persona?».

### Criterio de escalamiento a una persona

El escalamiento define cuándo el sistema deriva a alguien del equipo. Pregunta para el proveedor: «¿En qué casos deriva y qué contexto le llega a quien toma la conversación?».

### Medición

La medición dice si el sistema funciona. Pregunta para el proveedor: «¿Qué KPI vamos a mirar, cómo se reporta y desde cuándo?».

## Cuándo alcanza con un chatbot (y cuándo un agente no vale la pena)

Alcanza con un chatbot cuando las preguntas son informativas, la respuesta está en un documento estable y no hay que ejecutar nada en un sistema. Un agente no vale la pena cuando el proceso no está escrito, cuando no hay un sistema que consultar o cuando la acción es de alto riesgo y nadie definió la supervisión.

Horarios, requisitos, políticas de cambio o el estado de un trámite publicado en una página son terreno de chatbot. Sumar acciones ahí agrega mantenimiento y riesgo sin mejorar la respuesta.

El caso del proceso sin escribir merece atención aparte: si el proceso no está escrito, el agente amplifica el desorden. Ahí el primer paso es la [implementación de inteligencia artificial](/servicios/consultoria), que ordena procesos, datos y permisos antes de automatizar.


Un agente sí aplica cuando se cumplen tres condiciones publicadas en la matriz de viabilidad de Data Voices: el pedido se repite, la respuesta vive en un sistema que ya tienen y hay una persona que hoy hace de puente y no debería.

## ¿Agente de IA o automatización tradicional?

Una automatización tradicional, como un RPA o un workflow, sigue reglas fijas: la misma entrada recorre siempre el mismo camino. Un agente de IA interpreta pedidos en lenguaje natural y elige entre acciones permitidas. Si el proceso es siempre igual y los datos llegan estructurados, lo determinista suele ser más simple de construir, auditar y mantener.

Las dos piezas se combinan seguido. El agente entiende un pedido escrito en lenguaje libre y activa un flujo determinista que hace el resto.

## Qué hace un agente cuando no sabe la respuesta

Un agente bien diseñado tiene un comportamiento definido para cuando no sabe: lo dice con un criterio explícito, deriva a una persona con el contexto de la conversación, registra cada ejecución y cita la fuente de lo que responde. Los errores van a aparecer, y el diseño define qué pasa cuando aparecen.

Cuatro mecanismos para pedir por escrito:

- Un criterio explícito para decir «no sé» cuando la fuente no tiene la información.
- Derivación a una persona con el historial de la conversación.
- Registro de cada ejecución: qué se preguntó, qué consultó y qué respondió.
- Respuestas que citan la fuente, para que alguien pueda verificarlas.

La misma lógica aplica a las fallas técnicas. En el [Real Time Interview Agent](/casos/real-time-interview-agent), un desarrollo de Data Voices para entrevistas de RR. HH., si falla la conectividad, pasa a un motor local de transcripción y la sesión sigue.

## ¿Un chatbot puede convertirse en agente?

Sí: un chatbot se convierte en agente cuando se le suman una fuente de verdad, acciones con permisos y un criterio de escalamiento a una persona. El canal no cambia, cambia el diseño. Por eso un mismo producto puede funcionar como chatbot o como agente según cómo se configure para cada proceso.

Es la postura que Data Voices publica sobre su producto: «Cecilia puede ser las dos cosas; el diseño define cuál». Conviene evolucionar por etapas: primero el chatbot sobre la base de conocimiento, después una acción de bajo riesgo con su medición, y recién ahí acciones de más impacto.

## Tres ejemplos de agentes construidos por Data Voices

Data Voices publica tres agentes que muestran cómo se aplican los cinco criterios: Cecilia sobre WhatsApp, el Real Time Interview Agent para entrevistas de RR. HH. y Agent Launcher para tareas de análisis repetitivas. Cada uno resuelve un paso distinto, con su propia fuente de verdad, sus acciones permitidas y su forma de medir.

Cecilia es el [agente de IA para WhatsApp](/cecilia) de Data Voices: atiende, agenda y resuelve pedidos sin depender de una persona en el medio. Se integra con Mercado Libre, Google Calendar y Tiendanube. Según su FAQ publicada, puede funcionar como chatbot o como agente, y el diseño define cuál.

El [Real Time Interview Agent](/casos/real-time-interview-agent) procesa el audio del micrófono y los parlantes durante la entrevista, sin sumarse a la videollamada, identifica las preguntas y evalúa las respuestas contra los criterios configurados. El Real Time Interview Agent procesa la respuesta de un candidato en unos 6,45 segundos en Windows 11 y está disponible en Windows y macOS, con el flujo principal en producción.

[Agent Launcher](/casos/agent-launcher) es una plataforma desarrollada para una gestora de inversiones: el usuario elige agente, modelo y proveedor por separado, y cada ejecución queda persistida y auditada. Es un MVP validado técnicamente que pasó a ser una de las bases de una arquitectura de IA más amplia dentro del cliente.

## Preguntas frecuentes

### ¿Qué diferencia hay entre un chatbot y un agente de IA?

Un chatbot responde preguntas en lenguaje natural sobre una base de conocimiento. Un agente de IA resuelve un paso del proceso: consulta el sistema que tiene la respuesta real, como un CRM o un catálogo, y ejecuta una acción permitida, como agendar o cargar un pedido. Además tiene definido cuándo deriva a una persona y cómo se mide.

### ¿Es mejor un agente de IA que un chatbot?

Un agente es mejor solo cuando el proceso lo necesita: cuando hay que consultar un sistema y ejecutar una acción. Para preguntas informativas con respuesta en un documento estable, un chatbot es más simple de construir, mantener y auditar. Sumar más capacidad de la necesaria agrega riesgo y mantenimiento sin mejorar el resultado.

### ¿Necesito un chatbot o un agente de IA para mi negocio?

Necesitás un agente de IA si se cumplen tres condiciones: el pedido se repite, la respuesta vive en un sistema que ya tenés y hoy una persona hace de puente entre el canal y ese sistema. Si las consultas son informativas y la respuesta está en un documento estable, alcanza con un chatbot.

### ¿Puede un chatbot convertirse en un agente de IA?

Sí. Un chatbot se convierte en agente cuando se le suman una fuente de verdad, acciones con permisos y un criterio de escalamiento a una persona. El canal puede seguir siendo el mismo, por ejemplo WhatsApp o la web. Conviene hacerlo por etapas: primero una acción de bajo riesgo, con medición, y después las de más impacto.

### ¿Qué es un agente de IA y qué ejemplos hay?

Un agente de IA es un sistema que toma un pedido, consulta una fuente y ejecuta una acción dentro de permisos definidos. Ejemplos habituales: agendar turnos desde WhatsApp, cargar pedidos en un sistema de ventas, filtrar candidatos en un proceso de selección o activar un flujo interno cuando llega una solicitud.

### ¿Cuándo no conviene un agente de IA?

No conviene un agente cuando el proceso no está escrito, porque el agente amplifica el desorden; cuando no hay un sistema que consultar; o cuando la acción es de alto riesgo y nadie definió la supervisión. En el primer caso, el paso previo es ordenar el proceso; en el segundo, alcanza con un chatbot.

### ¿Qué hace un agente de IA cuando no sabe la respuesta?

Un agente bien diseñado aplica un criterio explícito para decir «no sé», deriva la conversación a una persona con todo el contexto, registra cada ejecución y cita la fuente de sus respuestas. Esos mecanismos se definen antes de construir, junto con las acciones que puede ejecutar sin supervisión y las que necesitan aprobación.

### ¿Qué diferencia hay entre un agente de IA y una automatización tradicional?

Una automatización tradicional sigue reglas fijas: la misma entrada recorre siempre el mismo camino. Un agente de IA interpreta pedidos en lenguaje natural y elige entre acciones permitidas. Si el proceso es siempre igual y los datos llegan estructurados, la automatización suele ser más simple; si los pedidos llegan en lenguaje libre, conviene un agente.

## Cómo decidir entre chatbot y agente

Elegí un chatbot si el pedido es informativo y la respuesta está en un documento estable. Elegí un agente si el pedido se repite, la respuesta vive en un sistema y hoy una persona hace de puente; si el proceso todavía no está escrito, empezá por ordenarlo.

Si además estás comparando proveedores, la guía sobre [cómo elegir una consultora de IA](/blog/como-elegir-consultora-inteligencia-artificial) tiene las preguntas para hacer antes de firmar.