let inject = () => {
    let app = document.createElement( 'div' );
    let hr = document.createElement('hr');
    hr.className = 'slot-hr desktop-bestsellers-1-hr';
    app.id = 'app';
    $(".desktop-ad-atf-hr").after([app, hr]);
};

export default inject