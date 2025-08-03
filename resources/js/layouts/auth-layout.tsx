import AuthLayoutTemplate from '@/layouts/auth/auth-simple-layout';

export default function AuthLayout({ children, title, description, ...props }: { children: React.ReactNode; title: string; description: string }) {
    return (
        <AuthLayoutTemplate title={title} description={description} {...props}>
            {children}
            <footer className="p-4 bg-[hsl(345,86%,49%)] text-center text-white">
            © 2025 RecipeSpace
            </footer>
        </AuthLayoutTemplate>
    );
}
