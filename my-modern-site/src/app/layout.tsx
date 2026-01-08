"use client";

import React, { useState, useEffect } from 'react';
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // 追加
import { Menu, X } from 'lucide-react';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // 現在のページURLを取得

  // ホームページかどうかを判定
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ヘッダーの文字色を決定するロジック
  // 1. メニューが開いている or スクロールした → 濃いグレー
  // 2. ホームページではない（Aboutページなど） → 濃いグレー
  // 3. それ以外（ホームのトップ） → 白
  const isDarkText = isScrolled || isMenuOpen || !isHomePage;

  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="relative z-[9999]">
          <nav className={`fixed top-0 w-full transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
            }`}>
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
              {/* ロゴ */}
              <Link
                href="/"
                className={`text-xl font-black tracking-tighter transition-colors duration-300 ${isDarkText ? 'text-indigo-600' : 'text-white'
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                TAIKI YOSHIDA
              </Link>

              {/* 【追加】PC用メニュー：中画面(md)以上で表示 */}
              <div className={`hidden md:flex gap-8 font-bold ${isDarkText ? 'text-slate-600' : 'text-white/90'
                }`}>
                <Link href="/" className="hover:text-indigo-500 transition-colors">Home</Link>
                <Link href="/about" className="hover:text-indigo-500 transition-colors">About</Link>
                <Link href="/works" className="hover:text-indigo-500 transition-colors">Works</Link>
                <Link href="#" className="hover:text-indigo-500 transition-colors">Running</Link>
              </div>

              {/* ハンバーガーボタン：中画面(md)以上で非表示 */}
              <button
                className={`md:hidden p-2 z-[10001] transition-colors duration-300 ${isDarkText ? 'text-slate-900' : 'text-white'
                  }`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </nav>

          {/* 右から出るメニュー（変更なし） */}
          <div className={`fixed top-0 right-0 h-full w-[280px] bg-white z-[10000] shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
            <nav className="flex flex-col gap-8 px-10 pt-24 text-xl font-bold text-slate-900">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            </nav>
          </div>

          {isMenuOpen && (
            <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm md:hidden" onClick={() => setIsMenuOpen(false)} />
          )}
        </div>

        <main className="relative z-0">
          {children}
        </main>
      </body>
    </html>
  );
}