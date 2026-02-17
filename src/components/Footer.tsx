export function Footer() {
    return (
        <footer className="py-12 bg-black border-t border-zinc-900 text-center">
            <div className="container mx-auto px-6">
                <h2 className="text-2xl font-black tracking-tighter text-white mb-4 uppercase">Echo</h2>
                <p className="text-zinc-500 text-sm max-w-md mx-auto mb-8">
                    Built by students. Run for the department. Designed for the future.
                </p>
                <div className="text-zinc-600 text-xs">
                    &copy; {new Date().getFullYear()} ECE Council for Hosting and Operations.
                </div>
            </div>
        </footer>
    );
}
