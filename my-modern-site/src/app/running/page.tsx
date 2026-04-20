"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function RunningPage() {
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

                <header className="mb-6">
                    <h1 className="text-5xl font-black tracking-tight mb-4">Running</h1>
                    <div className="w-20 h-1.5 bg-pink-600 rounded-full"></div>
                </header>

                <h2 className="mb-6">のんびりと中距離・マラソンをしています。現在の目標は、800m2分切り・1500m4分10秒切り・ハーフマラソン1時間15分切り・マラソン3時間切りです。よろしくお願いします。</h2>

                {/* ...以下コンテンツ... */}
                <section className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50">
                    <div className="flex items-center mb-6">
                        <div className="w-1 h-8 bg-pink-600 rounded-full mr-4"></div>
                        <h2 className="text-2xl font-bold">100m</h2>
                    </div>
                    <ul className="mt-4 space-y-2 text-base text-slate-600 font-medium">
                        <li className="flex items-center gap-2">PB（大学以降）：12.82</li>
                        <li className="flex items-center gap-2">大会：2026桃山チャレンジ (2026.04.12) </li>
                    </ul>
                </section>

                <section className="mt-8 bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50">
                    <div className="flex items-center mb-6">
                        <div className="w-1 h-8 bg-pink-600 rounded-full mr-4"></div>
                        <h2 className="text-2xl font-bold">800m</h2>
                    </div>
                    <ul className="mt-4 space-y-2 text-base text-slate-600 font-medium">
                        <li className="flex items-center gap-2">PB（大学以前）：2.02.42</li>
                        <li className="flex items-center gap-2">PB（大学以降）：2.05.79</li>
                        <li className="flex items-center gap-2">大会：第75回富山県民体育大会 (2022.07.16-17) </li>
                    </ul>
                </section>

                <section className="mt-8 bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50">
                    <div className="flex items-center mb-6">
                        <div className="w-1 h-8 bg-pink-600 rounded-full mr-4"></div>
                        <h2 className="text-2xl font-bold">1000m</h2>
                    </div>
                    <ul className="mt-4 space-y-2 text-base text-slate-600 font-medium">
                        <li className="flex items-center gap-2">PB（大学以降）：2.43.36</li>
                        <li className="flex items-center gap-2">大会：2025桃山チャレンジ (2025.05.11) </li>
                    </ul>
                </section>

                <section className="mt-8 bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50">
                    <div className="flex items-center mb-6">
                        <div className="w-1 h-8 bg-pink-600 rounded-full mr-4"></div>
                        <h2 className="text-2xl font-bold">1500m</h2>
                    </div>
                    <ul className="mt-4 space-y-2 text-base text-slate-600 font-medium">
                        <li className="flex items-center gap-2">PB（大学以前）：4.14.54</li>
                        <li className="flex items-center gap-2">PB（大学以降）：4.17.89</li>
                        <li className="flex items-center gap-2">大会：第30回富山カップ陸上競技大会 (2025.08.09-10) </li>
                    </ul>
                </section>

                <section className="mt-8 bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50">
                    <div className="flex items-center mb-6">
                        <div className="w-1 h-8 bg-pink-600 rounded-full mr-4"></div>
                        <h2 className="text-2xl font-bold">3000m</h2>
                    </div>
                    <ul className="mt-4 space-y-2 text-base text-slate-600 font-medium">
                        <li className="flex items-center gap-2">PB（大学以前）：9.51.00</li>
                        <li className="flex items-center gap-2">PB（大学以降）：9.44.30</li>
                        <li className="flex items-center gap-2">大会：第33回富山マスターズ 中長距離記録会 (2025.12.07) </li>
                    </ul>
                </section>

                <section className="mt-8 bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50">
                    <div className="flex items-center mb-6">
                        <div className="w-1 h-8 bg-pink-600 rounded-full mr-4"></div>
                        <h2 className="text-2xl font-bold">ハーフ（21.0975km）</h2>
                    </div>
                    <ul className="mt-4 space-y-2 text-base text-slate-600 font-medium">
                        <li className="flex items-center gap-2">PB（大学以降）：1:19:57</li>
                        <li className="flex items-center gap-2">大会：第19回みのかもハーフマラソン (2025.01.12)</li>
                    </ul>
                </section>

                <section className="mt-8 bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50">
                    <div className="flex items-center mb-6">
                        <div className="w-1 h-8 bg-pink-600 rounded-full mr-4"></div>
                        <h2 className="text-2xl font-bold">フル（42.195km）</h2>
                    </div>
                    <ul className="mt-4 space-y-2 text-base text-slate-600 font-medium">
                        <li className="flex items-center gap-2">PB（大学以降）：3:04:57</li>
                        <li className="flex items-center gap-2">大会：第42回カーター記念黒部名水マラソン (2025.05.25)</li>
                    </ul>
                </section>

                <section className="mt-8 bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50">
                    <div className="flex items-center mb-6">
                        <div className="w-1 h-8 bg-pink-600 rounded-full mr-4"></div>
                        <h2 className="text-2xl font-bold">リレーマラソン</h2>
                    </div>
                    <ul className="mt-4 space-y-2 text-base text-slate-600 font-medium">
                        <li className="flex items-center gap-2">◾️ 第2回つるぎハーフリレーマラソン (2024.11.17)：1:01:56（優勝）</li>
                        <li className="flex items-center gap-2">◾️ いっちゃん！リレーマラソン2025 (2025.06.01)：2:16:45（4位）</li>
                        <li className="flex items-center gap-2">◾️ 第32回立山アルペン健康マラソン大会 (2025.10.19)：1:14:56（2位）</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}