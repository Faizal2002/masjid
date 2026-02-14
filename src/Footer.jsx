
import { Instagram, MessageCircle, Heart } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-green-900 text-green-50 py-4 border-t border-green-800">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2">

                {/* Copyright / Main Text */}
                <div className="text-center md:text-left">
                    <p className="text-xs font-light font-Inter opacity-80">
                        © {new Date().getFullYear()} Noorul Islam Muslim Jamaath,Vallavilai. All rights reserved.
                    </p>
                </div>

                {/* Developer Watermark & Socials */}
                <div className="flex flex-col items-center md:items-end gap-1">

                    <div className="flex items-center gap-3">
                        <a
                            href="https://www.instagram.com/faizalvortex"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-amber-400 transition-colors duration-300 flex items-center gap-1.5 group"
                        >
                            <div className="p-1.5 bg-green-800 rounded-full group-hover:bg-green-700 transition-colors">
                                <Instagram className="w-4 h-4" />
                            </div>
                            <span className="text-xs font-medium transition-all">@faizalvortex</span>
                        </a>

                        <a
                            href="https://wa.me/916384741984"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-green-400 transition-colors duration-300 flex items-center gap-1.5 group"
                        >
                            <div className="p-1.5 bg-green-800 rounded-full group-hover:bg-green-700 transition-colors">
                                <MessageCircle className="w-4 h-4" />
                            </div>
                            <span className="text-xs font-medium transition-all">+91 6384741984</span>
                        </a>
                    </div>

                    <div className="text-[10px] font-Inter opacity-60 flex items-center gap-1 mt-0.5">
                        <span>Developed with</span>
                        <Heart className="w-2.5 h-2.5 text-red-500 fill-current animate-pulse" />
                        <span>by</span>
                        <span className="font-bold text-amber-500">Faizal</span>
                    </div>

                </div>
            </div>
        </footer>
    );
}
