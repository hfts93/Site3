function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function showReview(reviewId) {
    document.querySelectorAll('.review').forEach(review => {
        review.style.display = 'none';
    });
    document.getElementById(reviewId + '-review').style.display = 'block';
}
