"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function AboutPage() {
  return (
    // pt-32 を追加して、固定ヘッダーに被らないようにします
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-8 pt-32">
      <div className="max-w-3xl mx-auto">
        {/* 戻るボタン */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors mb-12 font-medium"
        >
          <ArrowLeft size={20} />
          ホームへ戻る
        </Link>

        <header className="mb-12">
          <h1 className="text-5xl font-black tracking-tight mb-4">About Me</h1>
          <div className="w-20 h-1.5 bg-indigo-600 rounded-full"></div>
        </header>

        {/* ...以下コンテンツ... */}
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50">
          <div className="flex items-center mb-6">
            <div className="w-1 h-8 bg-indigo-600 rounded-full mr-4 transition-transform group-hover:scale-y-125"></div>
            <h4 className="text-2xl font-bold">Profile</h4>
          </div>
          <ul className="mt-4 space-y-2 text-base text-slate-600 font-medium">
                <li className="flex items-center gap-2">名前：吉田大葵（Yoshida Taiki）</li>
                <li className="flex items-center gap-2">所属：富山県立大学大学院 工学研究科 電子・情報工学専攻</li>
                <li className="flex items-center gap-2">研究室：田川研究室</li>
                <li className="flex items-center gap-2">分野：Virtual Relity，Haptics</li>
          </ul>
        </section>

        <section className="mt-8 bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50">
          <div className="flex items-center mb-6">
            <div className="w-1 h-8 bg-indigo-600 rounded-full mr-4 transition-transform group-hover:scale-y-125"></div>
            <h4 className="text-2xl font-bold">Education</h4>
          </div>
          <ul className="mt-4 space-y-2 text-base text-slate-600 font-medium">
                <li className="flex items-center gap-2">2021 - 2025：B.S. in Information Systems at Toyama Prefectural Univ.</li>
                <li className="flex items-center gap-2">2025 - ：MEng student at Toyama Prefectural Univ.</li>
          </ul>

        </section>
        <section className="mt-8 bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50">
          <div className="flex items-center mb-6">
            <div className="w-1 h-8 bg-indigo-600 rounded-full mr-4 transition-transform group-hover:scale-y-125"></div>
            <h4 className="text-2xl font-bold">Hobby</h4>
          </div>
          <ul className="mt-4 space-y-2 text-base text-slate-600 font-medium">
                <li className="flex items-center gap-2">・Games(Play / Create)</li>
                <li className="flex items-center gap-2">・T&F(800m / 1500m)</li>
                <li className="flex items-center gap-2">・Marathon(Half / Full)</li>
          </ul>
        </section>
      </div>
    </div>
  );
}