
## `Lưu ý game Thieft`
- 
    private randomSprites(): void {
        // this.UIController.Grid.children.forEach(item => item.active = false)
        const items: {pos: cc.Vec2, node: cc.Node}[] = [];
        this.UIController.Grid.children.forEach((item => items.push({pos: item.getPosition(), node: item})));

        for (let i = items.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));  // Random index
            [items[i], items[j]] = [items[j], items[i]];  // Swap
        }
        

        this.UIController.Grid.children.forEach((item, index) => {
            item.setPosition(items[index].pos);
            GameInfo.Grid.currentStates[index].correctItemPos = new cc.Vec3(items[index].pos.x, items[index].pos.y, 0)
            GameInfo.Grid.currentStates[index].currentItem = items[index].node;

            if(index === this.UIController.Grid.children.length - 1) {
                let blankItem = GameInfo.Grid.currentStates.find(state => this.areVec3Equal(items[index].pos, state.correctItemPos))
                
                if (blankItem) {
                    blankItem.isNull = true; // Đánh dấu ô trống
                    // cc.log(`Blank Item: ${blankItem.currentItem.name}`);
                } else {
                    cc.error("Không tìm thấy ô trống phù hợp trong currentStates.");
                }                
            }

        })
        cc.log(GameInfo.Grid.currentStates);
    }