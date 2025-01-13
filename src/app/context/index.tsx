'use client'

import { wagmiAdapter, projectId } from './../config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createAppKit } from '@reown/appkit/react' 
import { bsc,polygon,polygonAmoy,bscTestnet } from '@reown/appkit/networks'
import React, { type ReactNode } from 'react'
import { cookieToInitialState, WagmiProvider, type Config } from 'wagmi'

// Set up queryClient
const queryClient = new QueryClient()

if (!projectId) {
  throw new Error('Project ID is not defined')
}
// Set up metadata
const metadata = {
  name: "IAI",
  description: "Evermoon Social-Fi",
  url: "https://testnet.evermoon.games",
  icons: [""],
};

// Create the modal

  createAppKit({
    adapters: [wagmiAdapter],
    projectId,
    networks: [bscTestnet,polygonAmoy],
    defaultNetwork: bscTestnet,
    metadata: metadata,
  })


  // createAppKit({
  //   adapters: [wagmiAdapter],
  //   projectId,
  //   networks: [polygon,bsc],
  //   defaultNetwork: bsc,
  //   metadata: metadata,
  //   features: {
  //     connectMethodsOrder: ['wallet'],
  //   },
  //   featuredWalletIds: [
  //     'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96'
  //   ],
  //   allWallets: 'HIDE',
  //   enableCoinbase:false,
  //   enableWalletConnect: false
  // })


function ContextProvider({ children }: { children: ReactNode;}) {
  const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config)

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig as Config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}

export default ContextProvider