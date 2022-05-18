const {
	exec
} = require("child_process");

function init() {
	exec("npm install", (error, stdout, stderr) => {
		if (error) {
			console.error(`执行install出错`);
			return;
		}
		const {
			say
		} = require("cfonts");
		const chalk = require("chalk");
		say("unicloudAdmin", {
			colors: ["yellow"],
			font: "simple",
			space: true,
		});
		console.log(
			chalk.blue("┏ 正在使用安装NPM依赖 -----------------") + "\n"
		);
		exec(
			"cd cloudfunctions-aliyun/api && npm install",
			(error, stdout, stderr) => {
				console.log(stdout)
				if (error) {
					console.error(`执行安装云开发环境出错`);
					return;
				}
				console.log(
					chalk.blue("┗ 安装完毕 ----------------------------") + "\n"
				);
				console.log(chalk.bold.red(" 请继续使用HBuilderx运行服务") + "\n");
				console.log(chalk.yellow(" --------------- 鸣谢 ----------------"));
				console.log(chalk.yellow("|                                     |"));
				console.log(chalk.yellow("| 开源不易，需要鼓励                  |"));
				console.log(chalk.yellow("| By: 迷糊K（Ferryman）              |"));
				console.log(chalk.yellow("| 如有其他问题请联系:                 |"));
				console.log(chalk.yellow("|            QQ: 631038597            |"));
				console.log(chalk.yellow("|            邮箱: zhanhengwork@outlook.com     |"));
				console.log(chalk.yellow("|                                     |"));
				console.log(
					chalk.yellow(" -------------------------------------") + "\n"
				);
			}
		);
	});
}

init();
