'use client';

import { useState } from 'react';
import { Users, Briefcase, Building2, Shield, CheckCircle } from 'lucide-react';

type TabType = 'public' | 'practitioners' | 'firms' | 'regulators';

export default function CFPValue() {
    const [activeTab, setActiveTab] = useState<TabType>('public');

    const tabs = [
        { id: 'public' as TabType, label: 'Public', icon: Users },
        { id: 'practitioners' as TabType, label: 'Practitioners', icon: Briefcase },
        { id: 'firms' as TabType, label: 'Firms', icon: Building2 },
        { id: 'regulators' as TabType, label: 'Regulators', icon: Shield },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                            The Value and Benefits of CFP® Certification
                        </h2>
                        <p className="text-lg text-charcoal max-w-4xl mx-auto leading-relaxed">
                            By completing internationally recognised initial and ongoing CFP® certification requirements, a CERTIFIED FINANCIAL PLANNER™ professional demonstrates to clients and potential clients a commitment to professionalism and that they have met rigorous competency, ethics and professional practice standards to provide comprehensive financial planning services.
                        </p>
                        <p className="text-lg text-charcoal mt-4">
                            CFP® certification benefits a variety of stakeholders. Learn how each group values CFP® certification by clicking on the tabs below.
                        </p>
                    </div>

                    {/* Tabs Navigation */}
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {tabs.map((tab) => {
                            const Icon = tab.icon;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${activeTab === tab.id
                                            ? 'bg-primary text-white shadow-lg'
                                            : 'bg-cool-gray text-primary hover:bg-primary/10'
                                        }`}
                                >
                                    <Icon className="w-5 h-5" />
                                    <span>{tab.label}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Tab Content */}
                    <div className="bg-cool-gray rounded-2xl p-8 md:p-10 animate-fade-in">
                        {/* Public Tab */}
                        {activeTab === 'public' && (
                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-6">
                                    Satisfied, Confident, Knowledgeable and Successful at Sticking to Strategies
                                </h3>
                                <p className="text-charcoal mb-6 leading-relaxed">
                                    CERTIFIED FINANCIAL PLANNER™ professionals are trusted financial professionals who work with individuals and families to review all aspects of their financial affairs and recommend practical, easy-to-understand solutions for every life stage. FPSB's research with more than 19,000 consumers worldwide showed:
                                </p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                                        <span className="text-charcoal">Those who work with a CERTIFIED FINANCIAL PLANNER™ professional feel more strongly confident about their financial situation than those managing their own finances or working with a different type of financial adviser.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                                        <span className="text-charcoal">Consumers who have a written, comprehensive plan are nearly three times more likely to feel strongly confident about achieving their life goals.</span>
                                    </li>
                                </ul>

                                <h3 className="text-2xl font-bold text-primary mb-6 mt-10">
                                    Life's Better with a CERTIFIED FINANCIAL PLANNER™ Professional
                                </h3>
                                <p className="text-charcoal mb-6 leading-relaxed">
                                    When seeking objective, expert and trusted financial planning advice, consumers can look to the CFP® certification marks – CERTIFIED FINANCIAL PLANNER™ professionals have agreed to adhere to a rigorous Code of Ethics and Professional Responsibility that requires them to place clients' interests ahead of their own. Consumers gave CFP® professionals high marks on:
                                </p>
                                <ul className="grid md:grid-cols-2 gap-3 mb-6">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                                        <span className="text-charcoal">Honesty and integrity</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                                        <span className="text-charcoal">Placing client's interests first</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                                        <span className="text-charcoal">Understanding client's needs and goals</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                                        <span className="text-charcoal">Explaining financial matters in simple terms</span>
                                    </li>
                                </ul>
                                <p className="text-sm text-slate-gray mt-8">Source: FPSB</p>
                            </div>
                        )}

                        {/* Practitioners Tab */}
                        {activeTab === 'practitioners' && (
                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-6">
                                    Career Advancement and Satisfaction, Income Growth, Better Able to Keep Clients
                                </h3>
                                <p className="text-charcoal mb-6 leading-relaxed">
                                    FPSB partnered with Cerulli Associates to survey more than 3,500 CERTIFIED FINANCIAL PLANNER™ professionals, representing private and retail banking, independent financial advisory and financial planning firms in six territories around the world, about the benefit of pursuing CFP® certification. The CERTIFIED FINANCIAL PLANNER™ professionals told us, that after receiving their CFP® certification:
                                </p>
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-white rounded-xl p-6 border-l-4 border-gold">
                                        <div className="text-4xl font-bold text-gold mb-2">37%</div>
                                        <p className="text-charcoal">Among those seeking to advance their careers, earned a promotion, got a new job or started their own practice</p>
                                    </div>
                                    <div className="bg-white rounded-xl p-6 border-l-4 border-gold">
                                        <div className="text-4xl font-bold text-gold mb-2">57%</div>
                                        <p className="text-charcoal">Reported growing their client base in the 12 months following their certification</p>
                                    </div>
                                    <div className="bg-white rounded-xl p-6 border-l-4 border-gold">
                                        <div className="text-4xl font-bold text-gold mb-2">63%</div>
                                        <p className="text-charcoal">Saw their income grow in the 12 months following their certification</p>
                                    </div>
                                    <div className="bg-white rounded-xl p-6 border-l-4 border-gold">
                                        <div className="text-4xl font-bold text-gold mb-2">72%</div>
                                        <p className="text-charcoal">Reported increased satisfaction with their careers</p>
                                    </div>
                                    <div className="bg-white rounded-xl p-6 border-l-4 border-gold">
                                        <div className="text-4xl font-bold text-gold mb-2">87%</div>
                                        <p className="text-charcoal">Expected to be able to keep clients longer</p>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-gray mt-8">Source: FPSB</p>
                            </div>
                        )}

                        {/* Firms Tab */}
                        {activeTab === 'firms' && (
                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-6">
                                    More Revenue, Fewer Complaints, Satisfied Clients
                                </h3>
                                <p className="text-charcoal mb-6 leading-relaxed">
                                    FPSB's international study conducted with 92 financial services firms in 12 territories representing over 120,000 financial advisors showed why the majority of firms plan to grow their number of CERTIFIED FINANCIAL PLANNER™ professionals:
                                </p>
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-white rounded-xl p-6 border-l-4 border-primary">
                                        <div className="text-4xl font-bold text-primary mb-2">59%</div>
                                        <p className="text-charcoal">Of firms reported that employing CFP® professionals led to fewer client complaints</p>
                                    </div>
                                    <div className="bg-white rounded-xl p-6 border-l-4 border-primary">
                                        <div className="text-4xl font-bold text-primary mb-2">69%</div>
                                        <p className="text-charcoal">Of firms reported that employing CFP® professionals lowered corporate risk</p>
                                    </div>
                                    <div className="bg-white rounded-xl p-6 border-l-4 border-primary">
                                        <div className="text-4xl font-bold text-primary mb-2">69%</div>
                                        <p className="text-charcoal">Of firms reported that CFP® professionals have a higher rate of growth of assets under management</p>
                                    </div>
                                    <div className="bg-white rounded-xl p-6 border-l-4 border-primary">
                                        <div className="text-4xl font-bold text-primary mb-2">76%</div>
                                        <p className="text-charcoal">Of firms found that employing CFP® professionals led to increased client retention</p>
                                    </div>
                                    <div className="bg-white rounded-xl p-6 border-l-4 border-primary">
                                        <div className="text-4xl font-bold text-primary mb-2">79%</div>
                                        <p className="text-charcoal">Of firms plan to grow the number of CFP® professionals</p>
                                    </div>
                                    <div className="bg-white rounded-xl p-6 border-l-4 border-primary">
                                        <div className="text-4xl font-bold text-primary mb-2">84%</div>
                                        <p className="text-charcoal">Of firms said employing CFP® professionals had a positive impact on client satisfaction within the firm</p>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-gray mt-8">Source: FPSB</p>
                            </div>
                        )}

                        {/* Regulators Tab */}
                        {activeTab === 'regulators' && (
                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-6">
                                    For Regulators, Legislators and Governments
                                </h3>
                                <h4 className="text-xl font-semibold text-primary mb-4">
                                    The Global Financial Planning Community Supports Good Outcomes For Consumers and the Profession
                                </h4>
                                <p className="text-charcoal mb-6 leading-relaxed">
                                    Competent, ethical financial planners follow a client-centric, process-driven approach to provide comprehensive advice and solutions that consider all aspects of a client's financial situation and needs – even if those needs are unstated or not fully understood by the client. The advice or recommendations provided by a professional financial planner may include the sale of a product. Regardless, CERTIFIED FINANCIAL PLANNER professionals are expected to provide financial planning advice and recommendations in the client's best interests.
                                </p>
                                <p className="text-charcoal mb-6 leading-relaxed">
                                    FPSB welcomes enforcement of appropriate standards for the financial planning profession, and believes that regulators, legislators and government bodies should recognize financial planning as a distinct, professional practice. FPSB also believes that financial planning should be regulated in a manner consistent with established professions, such as medicine, law and accounting.
                                </p>
                                <p className="text-charcoal mb-6 leading-relaxed">
                                    Governments should recognize that financial planning is still a new and emerging professional practice in many territories around the world. Effective regulation of professional services such as financial planning is best achieved through a collaborative effort among governments and professional bodies, where governments set the regulatory expectations of practice, market integrity and consumer protection, and professional bodies determine professional norms, conduct expectations and education and certification requirements that foster consumer and government confidence in the profession.
                                </p>
                                <p className="text-sm text-slate-gray mt-8">Source: FPSB</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
