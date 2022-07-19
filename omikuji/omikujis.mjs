export class omikujis {
  random(FortuneResults) {
    let num = Math.floor(Math.random() * FortuneResults.length);
    return FortuneResults[num];
  }
  /**願望 */
  get desire() {
    const FortuneResults = [
      "必ず叶う",
      "もうすぐ叶う",
      "思い通りだが、油断するな",
      "思いどおりになる",
    ];
    return this.random(FortuneResults);
  }
  /**健康 */
  get health() {
    const FortuneResults = ["問題ない", "働きすぎに注意せよ", "安静にせよ"];
    return this.random(FortuneResults);
  }
  /**恋愛 */
  get love() {
    const FortuneResults = ["この人が幸福を与える", "誠意を尽くして接せよ"];
    return this.random(FortuneResults);
  }
  /**金運 */
  get EconomicFortune() {
    const FortuneResults = ["必ず増える", "あまり使わないほうがよい"];
    return this.random(FortuneResults);
  }
  /**学問 */
  get academic() {
    const FortuneResults = ["目標をもって早めにたてよ", "安心して勉学せよ"];
    return this.random(FortuneResults);
  }
}
