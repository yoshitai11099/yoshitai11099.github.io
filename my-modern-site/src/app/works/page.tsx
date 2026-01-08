"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function WorksPage() {
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
           <div className="text-base text-slate-600 leading-relaxed mb-6">
            <li>aaa</li>
            <li>aaa</li>
            ここは別ファイルのAboutページです。詳細な経歴やスキル、ビジョンなどをここに記述できます。
          </div>
        </section>
      </div>
    </div>
  );
}