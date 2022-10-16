import { useRouter } from 'next/router'

export function useRouteGoBack() {
    const { back } = useRouter()
    return back
}
