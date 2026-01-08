"use client";

import React from 'react';
import { Mail, Code, Palette, Zap } from 'lucide-react';
import Link from 'next/link';


export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* ヒーローセクション（ナビなし、コンテンツのみ） */}
      <header
        className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white pt-48 pb-60 px-6 text-center"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0% 100%)' }}
      >
        <div className="max-w-4xl mx-auto relative z-0">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            Welcome
          </h1>
          <p className="text-xl md:text-2xl opacity-80 font-light">
            This is Taiki Yoshida（吉田大葵）'s website.
          </p>
        </div>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-6 -mt-32 pb-20">
        {/* グリッドレイアウト：スマホ1列 / PC2列 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* 1. About Me (カード全体をクリック可能に) */}
          <Link href="/about" className="block group">
            <section className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1 border border-slate-100 h-full">
              <div className="flex items-center mb-6">
                <div className="w-1 h-8 bg-indigo-600 rounded-full mr-4 transition-transform group-hover:scale-y-125"></div>
                <h4 className="text-2xl font-bold">About Me</h4>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                現在は大学院にてVRと触覚に関する研究を行っています．また，中距離種目やマラソンにも取り組んでいます．
              </p>

              {/* 右下に矢印：スマホでは常に表示(opacity-100)、PCではホバー時のみ(md:opacity-0 md:group-hover:opacity-100) */}
              <div className="mt-6 text-indigo-600 text-sm font-bold flex items-center gap-1 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                詳しく見る <span>→</span>
              </div>
            </section>
          </Link>

          {/* Works*/}
          <Link href="/works" className="block group">
            <section className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-slate-100">
              <div className="flex items-center mb-6">
                <div className="w-1 h-8 bg-purple-600 rounded-full mr-4"></div>
                <h2 className="text-2xl font-bold">Works</h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                大学・研究・趣味で作成した成果物の紹介
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">プログラミング</span>
                <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">マイコン</span>
                <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">アプリケーション</span>
                <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">VR</span>
                <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">Haptics</span>
                <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">Avatar</span>
              </div>

              {/* 右下に矢印などを添えると「クリックできる感」が増します */}
              <div className="mt-6 text-indigo-600 text-sm font-bold flex items-center gap-1 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                詳しく見る <span>→</span>
              </div>
            </section>
          </Link>

          {/* 3. Works / Projects */}
          <Link href="/works" className="block group">
            <section className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-slate-100">
              <div className="flex items-center mb-6">
                <div className="w-1 h-8 bg-pink-600 rounded-full mr-4"></div>
                <h2 className="text-2xl font-bold">Runnings</h2>
              </div>
              {/* <div className="aspect-video bg-slate-100 rounded-xl mb-4 flex items-center justify-center text-slate-400">
              <span className="text-sm italic font-medium underline underline-offset-4 decoration-indigo-300">Project Image Placeholder</span>
            </div> */}
              <p className="text-slate-600 leading-relaxed mb-4">
                自身の中距離種目/マラソンの記録
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">800m/1500m</span>
                <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">マラソン</span>
                <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">リレーマラソン</span>
              </div>

              <div className="mt-6 text-indigo-600 text-sm font-bold flex items-center gap-1 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                詳しく見る <span>→</span>
              </div>

            </section>
          </Link>


          {/* 4. Vision / Contact Info */}
          <section className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-slate-100">
            <div className="flex items-center mb-6">
              <div className="w-1 h-8 bg-emerald-600 rounded-full mr-4"></div>
              <h2 className="text-2xl font-bold">Others</h2>
            </div>
            <p className="text-slate-600 leading-relaxed italic">
              "Simple is better than complex." 複雑なものをシンプルに解釈し、誰にでも使いやすいツールを提供します。
            </p>
            <button className="mt-8 w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-indigo-600 transition-colors">
              Read More
            </button>
          </section>

        </div>

        {/* 下部のコンタクトボタンなどはそのままでも、別の配置にしてもOK */}
        <footer className="mt-20 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Taiki Yoshida All Right Reserved. </p>
        </footer>
      </main>
    </div>
  );
}