// TMARS Crypto Library - Main Entry Point
// A library for TMARS memecoin with support for TON and Solana blockchains

// Solana imports
import { connectSolanaTestnet } from './solana/testnet';
import { connectSolanaMainnet, getTmarsTokenInfo, TMARS_TOKEN_ADDRESS } from './solana/mainnet';

// TON imports
import { connectTONMainnet, getTmarsTonTokenInfo } from './ton/mainnet';
import { connectTONTestnet, getTmarsTestTokenInfo } from './ton/testnet';

// Bridge imports
import { bridgeTokens, getBridgeStatus, getSupportedChains } from './bridge/wormhole';

// Export all functionality
export {
  // Solana exports
  connectSolanaTestnet,
  connectSolanaMainnet,
  getTmarsTokenInfo,
  TMARS_TOKEN_ADDRESS,
  
  // TON exports
  connectTONMainnet,
  connectTONTestnet,
  getTmarsTonTokenInfo,
  getTmarsTestTokenInfo,
  
  // Bridge exports
  bridgeTokens,
  getBridgeStatus,
  getSupportedChains
};

// Main library initialization
export const TmarsLibrary = {
  version: '1.0.0',
  description: 'A library for TMARS memecoin with support for TON and Solana blockchains and a bridge using Wormhole',
  
  // Initialize the library
  init: () => {
    console.log('🚀 TMARS Crypto Library initialized');
    console.log('📦 Version:', TmarsLibrary.version);
    console.log('🌐 Supported chains:', getSupportedChains().join(', '));
    console.log('✅ VSCode development environment ready!');
  },
  
  // Get library info
  getInfo: () => ({
    version: TmarsLibrary.version,
    description: TmarsLibrary.description,
    supportedChains: getSupportedChains(),
    features: [
      'Solana blockchain integration',
      'TON blockchain integration', 
      'Cross-chain token bridging',
      'VSCode development support'
    ]
  })
};

// Auto-initialize when imported
TmarsLibrary.init();