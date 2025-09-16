# TMARS Crypto Library

Una biblioteca para el memecoin TMARS con soporte para las blockchains TON y Solana, incluyendo un puente usando Wormhole.

## 🚀 Configuración de Desarrollo en VSCode

### ¿Estás conectado a VSCode?

**¡Sí! Tu entorno de desarrollo VSCode está completamente configurado.** Esta biblioteca incluye:

### ✅ Configuraciones VSCode Incluidas

- **`.vscode/settings.json`** - Configuración optimizada para TypeScript
- **`.vscode/extensions.json`** - Extensiones recomendadas
- **`.vscode/launch.json`** - Configuración de depuración
- **`.vscode/tasks.json`** - Tareas de compilación

### 🛠️ Extensiones Recomendadas

Al abrir este proyecto en VSCode, se te sugerirán estas extensiones:

- TypeScript Language Support
- Prettier Code Formatter  
- Solana Developer Extension
- GitHub Copilot
- Live Share

### 📦 Scripts Disponibles

```bash
# Desarrollo con recarga automática
npm run dev

# Compilar el proyecto
npm run build

# Ejecutar la versión compilada
npm start

# Modo watch para desarrollo
npm run watch

# Limpiar archivos compilados
npm run clean
```

### 🔧 Depuración en VSCode

1. Presiona `F5` o ve a la pestaña "Run and Debug"
2. Selecciona "Debug TypeScript" para depurar directamente el código TS
3. Selecciona "Launch Program" para depurar la versión compilada

### 🌐 Características Principales

- ✅ **Integración con Solana**: Conecta a mainnet y testnet
- ✅ **Integración con TON**: Soporte para blockchain TON  
- ✅ **Puente Cross-chain**: Transferencias entre Solana y TON usando Wormhole
- ✅ **Desarrollo en TypeScript**: Tipado fuerte y IntelliSense completo
- ✅ **Configuración VSCode**: Entorno de desarrollo optimizado

### 🚀 Inicio Rápido

```typescript
import { TmarsLibrary, connectSolanaMainnet, bridgeTokens } from 'tmars-crypto-library';

// La biblioteca se inicializa automáticamente
console.log(TmarsLibrary.getInfo());

// Conectar a Solana
const solanaConnection = connectSolanaMainnet();

// Hacer bridge de tokens
const txId = await bridgeTokens({
  fromChain: 'solana',
  toChain: 'ton', 
  amount: 100,
  tokenAddress: 'token_address_here'
});
```

### 📁 Estructura del Proyecto

```
src/
├── index.ts          # Punto de entrada principal
├── solana/           # Módulos de Solana
│   ├── mainnet.ts    # Conexión a mainnet
│   └── testnet.ts    # Conexión a testnet
├── ton/              # Módulos de TON
│   ├── mainnet.ts    # Conexión a mainnet TON
│   └── testnet.ts    # Conexión a testnet TON
└── bridge/           # Módulos de puente
    └── wormhole.ts   # Implementación Wormhole
```

### 🔍 Estado de la Conexión VSCode

**✅ CONECTADO** - Tu entorno VSCode está completamente configurado con:

- IntelliSense de TypeScript habilitado
- Depuración configurada
- Formateo automático activado
- Extensiones recomendadas listadas
- Tareas de compilación disponibles

---

**¡Tu entorno de desarrollo VSCode para TMARS está listo para usar!** 🎉