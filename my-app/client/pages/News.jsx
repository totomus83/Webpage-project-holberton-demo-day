import React from "react";
import ImageGallery from "../effects/ImageGallery"

export default function News() {
  return (
    <>
    <hr className="section-divider" />
    <div className="page">
      <h1>News About Runy</h1>
      <h2>Glimpse of the development of our Game</h2>
      <p>For the development of Runy we used many tools:</p>
      <div className="tools-logos">
        <img src="/client/images/Blenderlogo.png" alt="Blender" />
        <img src="/client/images/Unity1.png" alt="Unity" />
        <img src="/client/images/csharp.png" alt="C# Scripting" className="csharp"/>
        <img src="/client/images/mirror.png" alt="Mirror" className="mirror"/>
      </div>


      <hr className="section-divider" />

      <section className="list-of-features-section">
        <h2>Current State of the Game</h2>
        <h3>Implemented List of Features:</h3>

        <section className="feature-group">
          <div className="feature-title">
            <h4>Game Setup</h4>
          </div>
            <div className="feature-text">
              <p>Change scene trigger by collider</p>
              <p>Animations: Player (IdleSit, IdleStand)</p>
              <p>Animation Rigging: Multi-aim + Two-bones IK for arms</p>
              <p>Player Input: Keyboard+Mouse and Gamepad</p>
            </div>
        </section>

        <section className="feature-group">
          <div className="feature-title">
            <h4>Player Input Actions</h4>
          </div>
          <p>Look: Headmesh and Camera follow mouse delta</p>
          <p>Move (ZQSD): player body movement and rotation</p>
          <p>HoldLeftArm: move left arm with LMB held</p>
          <p>HoldRightArm: move right arm with RMB held</p>
          <p>Grab (E): grab object when entering collider</p>
          <p>Release (R): ungrab object</p>
        </section>
        <div className="feature-images-row">
          <img src="/client/images/imageboat.png" alt="Setup 1" />
          <img src="/client/images/scene1_interaction_view.png" alt="Setup 2" />
        </div>

        <section className="feature-group">
          <div className="feature-title">
            <h4>Network Multiplayer Coop</h4>
          </div>
          <p>Sync scene changes between players</p>
          <p>Sync player transforms (position/rotation)</p>
          <p>Sync animations via Network Animator</p>
        </section>
        <div className="feature-images-row">
          <img src="/client/images/boatunity.png" alt="Setup 1" />
          <img src="/client/images/model1.png" alt="Setup 2" />
        </div>

        <section className="feature-group">
          <div className="feature-title">
            <h4>Puzzles</h4>
          </div>
          <p>Point lights and particles for lantern</p>
          <p>GrabPoint to align hands with objects</p>
          <p>Parent grabbed object to hand</p>
          <p>Shader-based fade for runes</p>
          <p>Coroutine delays for rune appearance</p>
          <p>3D rune bench with square slots</p>
          <p>Slot distance detection for tagged runes</p>
          <p>Fade to show rune correctness</p>
          <p>Trigger sea movement when all runes placed</p>
        </section>
        <div className="feature-images-row">
          <img src="/client/images/puzzlerune1.png" alt="Setup 1" />
          <img src="/client/images/runeboat1.png" alt="Setup 2" />
        </div>
      </section>

      <hr className="section-divider" />

      <section className="gallery">
        <div className="gallery-box">
          <h2 className="insight-title">Preview images of the current build</h2>
          <ImageGallery className="insight-gallery" />
        </div>
      </section>

      <hr className="section-divider" />

      <h2>Future of the Development</h2>
      <p>More features and puzzles coming soon...</p>
    </div>
    </>
  );
}