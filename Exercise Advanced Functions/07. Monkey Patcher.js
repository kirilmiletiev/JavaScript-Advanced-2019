function solve(commandName) {
    let balance = this.upvotes - this.downvotes;
    let allVotes = this.upvotes + this.downvotes;

    let commands;
    commands = {
        upvote: () => this.upvotes++,
        downvote: () => this.downvotes++,
        score: () => {
            let up = this.upvotes;
            let down = this.downvotes;

            if (allVotes > 50) {
                let value = Math.ceil(Math.max(up, down) * 0.25);

                if (allVotes > 50) {
                    up += value;
                    down += value;
                }
            }

            return [up, down, balance, getRating.call(this)];

            function getRating() {
                if (allVotes < 10) {
                    return 'new';
                }
                return this.upvotes > (this.upvotes + this.downvotes) * 0.66 ? 'hot' : balance >= 0 && (this.upvotes > 100 || this.downvotes > 100) ? 'controversial' : this.upvotes < this.downvotes ? "unpopular" : 'new';
            }
        }
    };

    return commands[commandName]();
}