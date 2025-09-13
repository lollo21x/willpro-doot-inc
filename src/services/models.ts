import { ModelInfo, ModelType } from '../types/chat';

export const AVAILABLE_MODELS: ModelInfo[] = [
  // Primary models (shown in main selector)
  {
    id: 'openai/gpt-oss-20b:free',
    name: 'GPT-OSS 20B',
    description: 'Modello open-weight MoE da 20B parametri, pensato per compiti generali con alta efficienza.',
    multimodal: false,
    isPrimary: true,
    isReasoning: true,
  },
  {
    id: 'deepseek/deepseek-chat-v3.1:free',
    name: 'DeepSeek V3.1',
    description: 'Modello aggiornato della serie V3, con modalità thinking e migliore gestione degli strumenti.',
    multimodal: false,
    isPrimary: true,
    isBase: true,
  },
  {
    id: 'google/gemma-3-4b-it:free',
    name: 'Gemma 3 4B',
    description: 'Modello leggero di Google Gemma, instruction-tuned e adatto a dispositivi con poche risorse.',
    multimodal: false,
    isPrimary: true,
    isBase: true,
  },
  {
    id: 'deepseek/deepseek-r1-0528:free',
    name: 'DeepSeek R1',
    description: 'Modello di DeepSeek dedicato al ragionamento step-by-step, forte in matematica e programmazione.',
    multimodal: false,
    isPrimary: false,
    isReasoning: true,
  },
  {
    id: 'google/gemma-3-12b-it:free',
    name: 'Gemma 3 12B',
    description: 'Modello medio della famiglia Gemma 3, bilanciato tra prestazioni e consumo di risorse.',
    multimodal: false,
    isPrimary: false,
    isBase: true,
  },
  {
    id: 'google/gemma-3-27b-it:free',
    name: 'Gemma 3 27B',
    description: 'Modello di grandi dimensioni della serie Gemma 3, con migliori capacità di ragionamento.',
    multimodal: false,
    isPrimary: false,
    isBase: true,
  },
  // Secondary models (shown in expanded view)
  {
    id: 'google/gemma-3n-e2b-it:free',
    name: 'Gemma 3N E2B',
    description: 'Modello compatto della linea Gemma 3N, pensato per esecuzione edge a bassa latenza.',
    multimodal: false,
    isPrimary: false,
    isBase: true,
  },
  {
    id: 'google/gemma-3n-e4b-it:free',
    name: 'Gemma 3N E4B',
    description: 'Modello ridotto della linea Gemma 3N, ottimizzato per efficienza su dispositivi mobili.',
    multimodal: false,
    isPrimary: false,
    isBase: true,
  },
   {
     id: 'google/gemini-2.0-flash-exp:free',
     name: 'Gemini 2.0 Flash Experimental',
     description: 'Modello sperimentale di Google Gemini, progettato per alta velocità e supporto visivo.',
     multimodal: true,
     isPrimary: false,
   },
  {
    id: 'moonshotai/kimi-k2:free',
    name: 'Kimi K2',
    description: 'Modello MoE di Moonshot AI, scalabile e adatto a compiti generali su larga scala.',
    multimodal: false,
    isPrimary: false,
    isBase: true,
  },
   {
     id: 'moonshotai/kimi-vl-a3b-thinking:free',
     name: 'Kimi VL A3B Thinking',
     description: 'Modello multimodale di Moonshot AI, capace di ragionamento avanzato su input visivi.',
     multimodal: false,
     isPrimary: false,
     isReasoning: true,
   },
  {
    id: 'z-ai/glm-4.5-air:free',
    name: 'GLM-4.5 Air',
    description: 'Modello leggero della serie GLM-4.5 di Zhipu, progettato per risposte rapide ed efficienti.',
    multimodal: false,
    isPrimary: false,
    isBase: true,
  },
  {
    id: 'qwen/qwen3-4b:free',
    name: 'Qwen3 4B',
    description: 'Modello compatto Qwen3 con 4B parametri, ottimizzato per dialogo e compiti generali.',
    multimodal: false,
    isPrimary: false,
    isBase: true,
  },
  {
    id: 'mistralai/devstral-small-2505:free',
    name: 'Devstral Small',
    description: 'Modello di Mistral AI pensato per software engineering e gestione di codebase.',
    multimodal: false,
    isPrimary: false,
    isCoder: true,
  },
  {
    id: 'qwen/qwen3-8b:free',
    name: 'Qwen3 8B',
    description: 'Modello Qwen3 intermedio da 8B parametri, adatto a multitask e uso generale.',
    multimodal: false,
    isPrimary: false,
    isBase: true,
  },
  {
    id: 'qwen/qwen3-14b:free',
    name: 'Qwen3 14B',
    description: 'Modello Qwen3 di fascia media-alta, con buone capacità di comprensione e ragionamento.',
    multimodal: false,
    isPrimary: false,
    isBase: true,
  },
  {
    id: 'qwen/qwen3-coder:free',
    name: 'Qwen3 Coder',
    description: 'Modello Qwen3 specializzato in programmazione e sviluppo software.',
    multimodal: false,
    isPrimary: false,
    isCoder: true,
  },
  {
    id: 'deepseek/deepseek-r1-0528-qwen3-8b:free',
    name: 'DeepSeek R1 Qwen',
    description: 'Distillazione del modello R1 su architettura Qwen, più leggera ma ancora orientata al reasoning.',
    multimodal: false,
    isPrimary: false,
    isReasoning: true,
  },
   {
     id: 'meta-llama/llama-3.2-11b-vision-instruct:free',
     name: 'Llama 3.2',
     description: 'Modello multimodale di Meta, capace di interpretare immagini e testi.',
     multimodal: true,
     isPrimary: false,
   },
  {
    id: 'mistralai/mistral-nemo:free',
    name: 'Mistral Nemo',
    description: 'Modello da 12B di Mistral AI, con supporto a contesti lunghi e compiti di coding.',
    multimodal: false,
    isPrimary: false,
    isBase: true,
  },
  {
    id: 'mistralai/mistral-small-3.2-24b-instruct:free',
    name: 'Mistral Small 3.2',
    description: 'Modello Mistral da 24B parametri, instruction-tuned e ottimizzato per multitask.',
    multimodal: false,
    isPrimary: false,
    isBase: true,
  },
  {
    id: 'openrouter/sonoma-dusk-alpha',
    name: 'Sonoma Dusk Alpha',
    description: 'Modello stealth sperimentale di OpenRouter, veloce e con contesto molto ampio.',
    multimodal: false,
    isPrimary: false,
    isBase: true,
  },
  {
    id: 'openrouter/sonoma-sky-alpha',
    name: 'Sonoma Sky Alpha',
    description: 'Modello stealth sperimentale di OpenRouter, più potente e con capacità avanzate.',
    multimodal: false,
    isPrimary: false,
    isBase: true,
  },
  {
    id: 'meta-llama/llama-4-scout:free',
    name: 'Llama 4 Scout',
    description: 'Modello di Meta con architettura MoE, efficiente e con contesti molto lunghi.',
    multimodal: false,
    isPrimary: false,
    isBase: true,
  },
  {
    id: 'moonshotai/kimi-dev-72b:free',
    name: 'Kimi Dev 72B',
    description: 'Modello di Moonshot AI con 72B parametri, specializzato in sviluppo software e coding.',
    multimodal: false,
    isPrimary: false,
    isCoder: true,
  },
  {
    id: 'openai/gpt-oss-120b:free',
    name: 'GPT-OSS 120B',
    description: 'Modello MoE open-weight da 120B parametri, progettato per ragionamento complesso e contesti estesi.',
    multimodal: false,
    isPrimary: false,
    isReasoning: true,
  },
  {
    id: 'meta-llama/llama-4-maverick:free',
    name: 'Llama 4 Maverick',
    description: 'Modello avanzato di Meta Llama 4, ottimizzato per ragionamento e programmazione.',
    multimodal: false,
    isPrimary: false,
    isBase: true,
  },
   {
     id: 'deepseek/deepseek-chat-v3-0324:free',
     name: 'DeepSeek V3',
     description: 'Modello MoE conversazionale di DeepSeek, ottimizzato per efficienza e multitask.',
     multimodal: false,
     isPrimary: false,
     isBase: true,
   },
   {
     id: 'meta-llama/llama-3.1-405b-instruct:free',
     name: 'Llama 3.1 405B',
     description: 'Modello flagship di Meta da 405B parametri, adatto a compiti linguistici complessi.',
     multimodal: false,
     isPrimary: false,
     isBase: true,
   },
   {
     id: 'meta-llama/llama-3.2-3b-instruct:free',
     name: 'Llama 3.2 3B',
     description: 'Modello ridotto di Meta Llama 3.2, pensato per dialogo e sintesi leggera.',
     multimodal: false,
     isPrimary: false,
     isBase: true,
   },
   {
     id: 'meta-llama/llama-3.3-8b-instruct:free',
     name: 'Llama 3.3 8B',
     description: 'Modello di Meta Llama 3.3 da 8B parametri, rapido e instruction-tuned.',
     multimodal: false,
     isPrimary: false,
     isBase: true,
   },
   {
     id: 'meta-llama/llama-3.3-70b-instruct:free',
     name: 'Llama 3.3 70B',
     description: 'Modello grande di Meta Llama 3.3, ottimizzato per multitask e contesti estesi.',
     multimodal: false,
     isPrimary: false,
     isBase: true,
   },
 ];

export const getPrimaryModels = (): ModelInfo[] => {
  return AVAILABLE_MODELS.filter(model => model.isPrimary);
};

export const getSecondaryModels = (): ModelInfo[] => {
  return AVAILABLE_MODELS.filter(model => !model.isPrimary);
};

export const getModelById = (id: ModelType): ModelInfo | undefined => {
  return AVAILABLE_MODELS.find(model => model.id === id);
};

export const getDefaultModel = (): ModelType => 'openai/gpt-oss-20b:free';

// Group models by provider
export const getModelsByProvider = (): Record<string, ModelInfo[]> => {
  const grouped: Record<string, ModelInfo[]> = {};
  
  AVAILABLE_MODELS.forEach(model => {
    const provider = model.id.split('/')[0];
    if (!grouped[provider]) {
      grouped[provider] = [];
    }
    grouped[provider].push(model);
  });
  
  return grouped;
};

// Get provider display name
export const getProviderDisplayName = (provider: string): string => {
  switch (provider) {
    case 'openai':
      return 'OpenAI';
    case 'z-ai':
      return 'Z-AI';
    case 'moonshotai':
      return 'Moonshot AI';
    case 'mistralai':
      return 'Mistral AI';
    case 'qwen':
      return 'Qwen';
    case 'deepseek':
      return 'DeepSeek';
    case 'google':
      return 'Google';
    case 'meta-llama':
      return 'Meta';
    default:
      return provider.charAt(0).toUpperCase() + provider.slice(1);
    case 'openrouter':
      return 'OpenRouter';
  }
};