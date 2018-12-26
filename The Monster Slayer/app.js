new Vue({
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        newGame: false,
        attacks: []
    },
    methods: {
        startGame: function() {
            this.newGame = !this.newGame;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.attacks = [];
        },
        attack: function() {
            var playerDamage = this.calculateDamage(10);
            this.monsterHealth = this.monsterHealth - playerDamage;

            this.attacks.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + playerDamage
            });

            if (this.checkWin()) {
                return;
            }

            this.monsterAttack();
            
        },
        monsterAttack: function() {
            var monsterDamage = this.calculateDamage(10);
            this.playerHealth = this.playerHealth - monsterDamage;
            this.attacks.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + monsterDamage
            });
            this.checkWin();
        },
        specialAttack: function() {
            var playerDamage = this.calculateDamage(20);
            this.monsterHealth = this.monsterHealth - playerDamage;

            this.attacks.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + playerDamage
            });

            if (this.checkWin()) {
                return;
            }

            this.monsterAttack();
        },
        heal: function() {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
                this.attacks.unshift({
                    isPlayer: true,
                    text: 'Player heals for 10'
                });
            } else {
                this.playerHealth = 100;
                this.attacks.unshift({
                    isPlayer: true,
                    text: 'Player heals to 100'
                });
            }
            this.monsterAttack();
        },
        calculateDamage: function(max) {
            return Math.floor(Math.random() * max);
        },
        checkWin: function() {
            if (this.monsterHealth <= 0) {
                if (confirm('You won! New Game?')) {
                    this.startGame();
                } else {
                    this.newGame = false;
                }
                return true;
            } else if (this.playerHealth <=0) {
                if (confirm('You lost! New Game?')) {
                    this.startGame();
                } else {
                    this.newGame = false;
                }
                return true;
            }
            return false;
        }
    }
})