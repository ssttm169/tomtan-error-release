import{_ as n,o as s,c as e,d as a}from"./app-87a1aa54.js";const i={},t=a(`<h3 id="问题表现" tabindex="-1"><a class="header-anchor" href="#问题表现" aria-hidden="true">#</a> 问题表现</h3><p>我们向github推送本地有现有项目的时候, 如果提示出现以下这个异常, 是提示你没有任何代码需要提交.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>error: src refspec main does not match any
error: failed to push some refs to <span class="token string">&#39;github.com:username/xxxx.git&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h3><p>我们先执行 <code>git status</code>, 如果提醒以下这种 Untracked files 信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Untracked files:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to include <span class="token keyword">in</span> what will be committed<span class="token punctuation">)</span>
	.DS_Store
	.github/
	.gitignore
	deploy.sh
	xxxxx/
	package.json
	pnpm-lock.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>就是提示 没有暂存文件, 也没有填写提交说明。</p><p>这是我们可以执行以下这个命令即可。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span> <span class="token comment">#  将当前修改过的文件添加到暂存区</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;提交说明&#39;</span>  <span class="token comment"># 将修改的文件提交到本地仓库</span>
<span class="token function">git</span> push <span class="token comment"># 推送到服务端. 也可能会提示要执行下面的命令</span>
<span class="token function">git</span> push --set-upstream origin main <span class="token comment"># main是分支名称，看自己的情况命名。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>希望对你有帮助。</p>`,10),c=[t];function d(l,o){return s(),e("div",null,c)}const p=n(i,[["render",d],["__file","src-refspec-main-does-not-match-any.html.vue"]]);export{p as default};
