'use client'

import { wagmiAdapter, projectId } from './../config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createAppKit } from '@reown/appkit/react' 
import { bsc,polygon } from '@reown/appkit/networks'
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
  description: "IAI Presale",
  url: "https://presale.iai.center",
  icons: [""],
};

// Create the modal

  createAppKit({
    adapters: [wagmiAdapter],
    projectId,
    networks: [bsc,polygon],
    defaultNetwork: polygon,
    metadata: metadata,
  })


function ContextProvider({ children }: { children: ReactNode;}) {
  const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config)

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig as Config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}

export default ContextProvider