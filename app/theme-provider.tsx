"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
    children,
    ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    // Renderiza apenas o conteúdo após a hidratação no cliente
    if (!mounted) {
        return <div style={{ visibility: "hidden" }}>{children}</div>
    }
    
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
