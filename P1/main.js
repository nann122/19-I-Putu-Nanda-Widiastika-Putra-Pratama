function setupLikeButton(buttonId, countId) {
    let likeCount = 0;
    const button = document.getElementById(buttonId);
    const countElement = document.getElementById(countId);

    button.addEventListener('click', () => {
        likeCount++;
        countElement.textContent = `${likeCount} Likes`;
    });
}

setupLikeButton('like-button-1', 'like-count-1');
setupLikeButton('like-button-2', 'like-count-2');
setupLikeButton('like-button-3', 'like-count-3');
