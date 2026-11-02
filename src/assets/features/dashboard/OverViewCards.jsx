import React from 'react'
import {
    BookOpen,
    Repeat,
    Target,
    NotebookPen,
    ArrowUpRight,
} from "lucide-react";

const overviewData = [
    {
        title: "Experiences",
        count: "12",
        description: "Your journal entries",
        icon: BookOpen,
        color: "bg-[#E8F0E9]",
        iconColor: "text-[#52745B]",
        cardColor: "bg-[#E8F0E9]",

    },
    {
        title: "Active Habits",
        count: "05",
        description: "Habits you're tracking",
        icon: Repeat,
        color: "bg-[#F5EDE1]",
        iconColor: "text-[#98784C]",
        cardColor: "bg-[#F5EDE1]",
    },
    {
        title: "Active Goals",
        count: "04",
        description: "Goals in progress",
        icon: Target,
        color: "bg-[#EAEAF5]",
        iconColor: "text-[#66638E]",
        cardColor: "bg-[#EAEAF5]",
    },
    {
        title: "Total Notes",
        count: "08",
        description: "Your saved thoughts",
        icon: NotebookPen,
        color: "bg-[#F5E8E8]",
        iconColor: "text-[#9A6262]",
        cardColor: "bg-[#F5E8E8]",
    },
];

const OverViewCards = () => {
    return (
        <section className="grid grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 p-2 sm:mx-1 my-1 sm:my-2 lg:my-3 sm:p-4 lg:p-5">


            {
                overviewData.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.title}
                            className={`group rounded-2xl border border-[#EAEAE5] ${item.cardColor} p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
                        >
                            <div className="flex items-center justify-between">
                                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.color}`}>
                                    <Icon size={20} className={item.iconColor} />
                                </div>

                                <ArrowUpRight
                                    size={17}
                                    className="text-gray-300 transition group-hover:text-gray-600"
                                />
                            </div>

                            <div className="mt-5">
                                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#263D30]">
                                    {item.count}
                                </h2>

                                <p className="mt-1 text-sm font-semibold text-[#47584B]">
                                    {item.title}
                                </p>

                                <p className="mt-1 text-[11px] sm:text-xs text-[#929991]">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    );
                })
            }

        </section>
    )
}

export default OverViewCards