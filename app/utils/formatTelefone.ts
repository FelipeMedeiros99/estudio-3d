export function formatPhoneNumber(phone: string): string {
  // 1. Sanitização: Remove qualquer caractere que não seja dígito (0-9)
  const cleaned = phone.replace(/\D/g, "");

  // 2. Extração e Formatação (Padrão Celular: 13 ou 11 dígitos)
  // Aceita com DDI (55) ou sem DDI, capturando DDD, dígito 9 e os dois blocos de 4 dígitos.
  const mobileRegex = /^(?:55)?(\d{2})(\d{1})(\d{4})(\d{4})$/;
  const mobileMatch = cleaned.match(mobileRegex);

  if (mobileMatch) {
    // mobileMatch[1] = DDD, mobileMatch[2] = 9, mobileMatch[3] = Prefixo, mobileMatch[4] = Sufixo
    return `(${mobileMatch[1]}) ${mobileMatch[2]} ${mobileMatch[3]}-${mobileMatch[4]}`;
  }

  // 3. Fallback para Telefones Fixos (12 ou 10 dígitos)
  const landlineRegex = /^(?:55)?(\d{2})(\d{4})(\d{4})$/;
  const landlineMatch = cleaned.match(landlineRegex);

  if (landlineMatch) {
    return `(${landlineMatch[1]}) ${landlineMatch[2]}-${landlineMatch[3]}`;
  }

  // Retorna os números limpos se a string não corresponder aos padrões de telefonia brasileira
  return cleaned;
}

// Exemplo de uso:
// formatPhoneNumber('5598989079722') // Retorna: "(98) 9 8907-9722"
